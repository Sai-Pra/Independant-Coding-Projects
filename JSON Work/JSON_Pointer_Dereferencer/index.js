// import fs from 'fs';
 

/* Example / Testing Fixtures

 
Thermal/Quantum

Eng and Ethics

Data Structures (Phil???)

ECE 210
 

1. Retrieve document from rootURL.  A URL is a full 'address' that contains the schema and all the other information necessary to retrieve the resource.  URIs can be subsets, usually 'relative links'.

 

2. Assume document is JSON, and parse into in memory object structure.

 

3. Traverse the in memory object properies ( this is a tree ).  For any properties with the name/key of '$ref',

dereference the URI (e.g. relative directly path) from the '$ref' value.

 

4. Fetch the next document from the URL build in step 3.

 

5. Rince and Repeate back to step 2.

 

6. As you 'unravel' the recursion, replace all of the '$ref' properties that were found with the new objects built from the new JSON files.

 

7. console.log( JSON.stringify( inMemoryObject ) );

 

8. Declare Victory!!!

 

rootURL = file:///./root.schema.json

 

root.schema.json:

{

    $ref: './next.shema.json'

}

 

next.schema.json:

{

    $ref: './third.schema.json'

}

 

third.schema.json:

"Victory"

 

The final object/JSON will be:

 

{ $ref: { $ref: "Victory" } }

 

 

baseURI will be something like file:///./

 

So dereferenced URLs will be file:///./ + "./next.schema.json" i.e.. file:///./next.schema.json

 

*/

 

 

 
// let RootURL = "file:///./root.schema.json";

 

// $ref = "./schema/me.schema.json";

// let baseURI = null;

 

 

 

// async function dereference( RootUrl ) {

//     baseURI = getBaseURI( RootURL );

//     const resource = fetch( RootURL );

//     const rootJSON = await fs.readFile( RootUrl );

//     const root = JSON.parse( rootJSON );

   

//     // This is pseudo code... a tree traversal on the root objects is needed.  Find

//     // all $ref and recursively call replacing $refs with 'file' fetched from the

//     // dereferenced $ref value.

 

//     for ref in root.Object.keys {

//         const refURL = ref; //root.properties.foo.$ref

//         const fullURL = ourBaseURI + refURL;

//         ref = dererernce( refURL );

//     }

// }

// Geek for Geeks (fs and fsPromises): https://www.geeksforgeeks.org/node-js-filehandle-readfile-method/
// JSON parse (Find $refs): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

/*

This function takes in a .json file as an argument and returns string. This string is the alalgamation of all the .json files 
that are referenced in the original .json file using the $ref property.

*/

const fs = require('fs');

//const fs = require('fs');

function findProp(rootProp){
    var arr = [];
    if(rootProp){
        if(rootProp.properties){
            for (const key in rootProp.properties){
                arr.push(findProp(rootProp.properties[key]));
            }
        }
        else {
            arr.push(rootProp);
        }
    }
    return arr;
}

function combineSchemas(schemaPath) {

    //Checks if schemaPath is a valid file path. If it is, open the file and parse it into a JSON object. Otherwise, check if
    //schemaPath is a valid URL. If it is, fetch the URL and parse it into a JSON object. Otherwise, check if schemaPath is a
    //reference t a $def. If it is, dereference, find the schema the $def is refering to, and open that file.
    // schemaPath = schemaPath.split('#');
    console.log(schemaPath);
    let root = "";
    if(fs.existsSync(schemaPath)){
        const file = fs.readFileSync(schemaPath);
        root = JSON.parse(file);
        // if(schemaPath[1]){
        //     let path = schemaPath[1].split('/'); 
        //     for(let i = 1; i < path.length; i++){
        //         root = root[path[i]];
        //     }
        // }
    } 
    else if (schemaPath.startsWith('http')){
        const file = fetch(schemaPath);
        root = JSON.parse(file);
    } 
    else {
        throw new Error('Invalid schemaPath');
    }
    
    // Goes through root, if we find a ref, we dereference it and call combine schema in that, otherwise we call combine schema from the other
    // properites. We then return the root.

    // If the root has a $ref property, then we need to dereference it and combine the schema that it accesses with the root schema. 
    // To combine it, let use recursively call this combineSchema function and derefence all the $refs in this new schema as well. Until we have a schema with no $refs.
    // There are no more $refs. After we do this, let us return the new schema and combine it with the root schema. After we checked for the
    // $refs, we will now go on to check if the properties keyword of the root schema has any $ref. For all the properties that have $ref, we will
    // dereference them and combine them with the root schema. We will do this recursively until we have a schema with no $refs. After we do this,
    // We will check again if within the properties, there are other properties that have $refs. We will do this until we have a schema with no $refs.

    if(root.$ref){
        const refPath = root.$ref;
        delete root.$ref
        const refSchema = combineSchemas(refPath);
        for(const key in refSchema){
            if(refSchema.hasOwnProperty(key)){
                root[key] = refSchema[key];
            }
        }
        //fs.writeFile('new_schema.json', root, (err) => { if (err) throw err; });
        // combineSchemas('new_schema.json');
    } 
    // Grabs the root, find all the properties of the root. If they are $ref, replace it witht he right schema
    // If they are not $ref, then we will recursively call combineSchemas on the properties of the root.

    if(root.properties){
        for( var i in root.properties){
            if(root.properties[i].$ref){
                const refPath = root.properties[i].$ref;
                delete root.properties[i].$ref;
                const refSchema = combineSchemas(refPath);
                for(const key in refSchema){
                    if(refSchema.hasOwnProperty(key)){
                        root.properties[i][key] = refSchema[key];
                    }
                }
            }
        }
    }

    // if(root.definitions){
    //     for( var i in root.definitions){
    //         if(root.definitions[i].$ref){
    //             const refPath = root.definitions[i].$ref;
    //             delete root.definitions[i].$ref;
    //             const refSchema = combineSchemas(refPath);
    //             for(const key in refSchema){
    //                 if(refSchema.hasOwnProperty(key)){
    //                     root.definitions[i][key] = refSchema[key];
    //                 }
    //             }
    //         }
    //     }
    // }
    return root;
}

let schema = combineSchemas('./Test_Case_1/root.schema.json');
console.log(schema);
//Write the contents of the schema to a new .json file in ./Test_Case_1 called new_schema.json. If the file already exists, it will be overwritten.
//If the file does not exist, it will be created.
fs.writeFile('./Test_Case_1/new_schema.json', JSON.stringify(schema), (err) => { if (err) throw err; });
//New Lines
console.log("\n");

schema = combineSchemas('./Test_Case_2/root.schema.json');
console.log(schema);
//Write the contents of the schema to a new .json file in ./Test_Case_2 called new_schema.json
fs.writeFile('./Test_Case_2/new_schema.json', JSON.stringify(schema), (err) => { if (err) throw err; });
// New Lines
console.log("\n");

schema = combineSchemas('./Test_Case_3/root.schema.json');
console.log(schema);
//Write the contents of the schema to a new .json file in ./Test_Case_3 called new_schema.json
fs.writeFile('./Test_Case_3/new_schema.json', JSON.stringify(schema), (err) => { if (err) throw err; });
// New Lines
console.log("\n");


schema = combineSchemas('./Test_Case_4/root.schema.json');
console.log(schema);
//Write the contents of the schema to a new .json file in ./Test_Case_3 called new_schema.json
fs.writeFile('./Test_Case_4/new_schema.json', JSON.stringify(schema), (err) => { if (err) throw err; });
// New Lines
console.log("\n");

// schema = combineSchemas('./Test_Case_5/root.schema.json');
// // schema = combineSchemas('./Test_Case_5/new_schema.json');
// // schema = combineSchemas('./Test_Case_5/new_schema.json');
// console.log(schema);
// //Write the contents of the schema to a new .json file in ./Test_Case_3 called new_schema.json
// fs.writeFile('./Test_Case_5/new_schema.json', JSON.stringify(schema), (err) => { if (err) throw err; });
// // New Lines
// console.log("\n");









// const fs = require('fs');
// const fsPromises = fs.promises;
  
// // Using the async function to
// // ReadFile using filehandle

// function combineSchemas(schemaPath) {
//   const root = fs.readFileSync(schemaPath);
//   const rootSchema = JSON.parse(root);
//   if (rootSchema.$ref !== null) {
//     const refPath = rootSchema.$ref;
//     rootSchema.$ref = null;
//     const refSchema = combineSchemas(refPath);
//     for (const key in refSchema) {
//       if (refSchema.hasOwnProperty(key)) {
//         rootSchema[key] = refSchema[key];
//       }
//     }
//   }
//   return rootSchema;
// }

// const rootSchema = combineSchemas('./root.schema.json');
// console.log(rootSchema);




/*

Test-Driven Development:

Mocha.js and Chai.js

Test Driven Development by Kent Beck

Javascript: The Good Parts 

*/