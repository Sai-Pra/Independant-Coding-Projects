// Make an example thing for me to validate using mocha. This should have multiple functions
const fs = require('fs');
// Export the functions so that they can be used in other files

module.exports = {
    readSchema: readSchema,
    writeSchema: writeNewSchema,
    searchForRef: searchForRef,
    combineSchemas: combineSchemas
};







function readSchema(filename) {
    //console.log(filename);
    if (fs.existsSync(filename)) {
        try {
            const schema = fs.readFileSync(filename);
            return JSON.parse(schema);
        } catch (error) {
            return `Failed to parse JSON in file ${filename}: ${error.message}`;
        }
    }
    return "Unknown file; failed to read schema";
}


function writeNewSchema(file_data, filepath){
    if(file_data == "Unknown file; failed to read schema"){
        fs.writeFileSync(filepath, JSON.stringify(file_data + ' to ' + filepath), (err) => { if (err) throw err; });
    }
    fs.writeFileSync(filepath, JSON.stringify(file_data), (err) => { if (err) throw err; });
}

function combineSchemas(schemaPath) { // Opens scehma and calls searchForRef to combine the schemas
    let rootSchema = readSchema(schemaPath);
    if (rootSchema === "Unknown file; failed to read schema") {
        writeNewSchema(rootSchema, './failed_schema.json');
        return "FAILED TO COMBINE";
    }
    rootSchema = searchForRef(rootSchema);
    return rootSchema;
}

function searchForRef(schema) { // Searchs for refs and replaces them
    // Modifies the schema object to resolve references
    if (schema.$ref) { 
        const refPath = schema.$ref; 
        delete schema.$ref; 
        const refSchema = combineSchemas(refPath); 
        for (const key in refSchema) {
            schema[key] = refSchema[key]; 
        }
    }
    if (schema.properties) { 
        for (const prop in schema.properties) {
            const subschema = searchForRef(schema.properties[prop]); 
            schema.properties[prop] = subschema; 
        }
    }
    return schema; 
}
