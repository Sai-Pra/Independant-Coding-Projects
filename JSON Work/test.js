const Ajv = require("ajv")
const ajv = new Ajv({allErrors: true})

let schema;
try {
  schema = require("./schema.json");
} catch (e) {
  console.log("Error loading schema:", e);
}

const validate = ajv.compile(schema)

const ban_schema = 
{
  foo: 2, 
  bar: 2,
}

const validTest = 
{
    foo: "abc", 
    bar: 2,
    ban: ban_schema
};

const invalidTest = 
{
    foo: 2, 
    bar: 4
};


test(validTest);
test(invalidTest);

function test(data) {
  const valid = validate(data)
  if (valid) console.log("Valid!")
  else console.log("Invalid: " + ajv.errorsText(validate.errors))
}