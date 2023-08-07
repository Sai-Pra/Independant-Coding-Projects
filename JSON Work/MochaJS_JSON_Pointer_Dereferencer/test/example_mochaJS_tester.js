const assert = require('chai').assert;
// const app = require('../example_mochaJS_setup.js');
const app = require('../json_concatenator.js');



// Test for the functions in json_concatenator.js; for now just test readSchema, have it read the schema files in Test_Case_1


describe('app\n', function() {
    describe('readSchema() for Test Case 1', function() {
        
        /* Checks if readSchema can open a file */
        
        it('readSchema() should open root.schema.json correctly', function() {
            assert.doesNotThrow(() => { app.readSchema('./Test_Case_1/root.schema.json') }, Error, 'readSchema threw an error');
        });
        it('readSchema() should open next.schema.json correctly', function() {
            assert.doesNotThrow(() => { app.readSchema('./Test_Case_1/next.schema.json') }, Error, 'readSchema threw an error');
        });
        it('readSchema() should open third.schema.json correctly', function() {
            assert.doesNotThrow(() => { app.readSchema('./Test_Case_1/third.schema.json') }, Error, 'readSchema threw an error');
        });

        /* Type returned is string */
        
        it('readSchema() should return a string when fed root.schema.json', function() {
            assert.typeOf(app.readSchema('./Test_Case_1/root.schema.json'), 'string');
        });
        it('readSchema() should return a string when fed next.schema.json', function() {
            assert.typeOf(app.readSchema('./Test_Case_1/next.schema.json'), 'string');
        });
        it('readSchema() should return a string when fed third.schema.json', function() {
            assert.typeOf(app.readSchema('./Test_Case_1/third.schema.json'), 'string');
        });
        
        /* Correctly parses files into it's corrosponding string */
        
        it('readSchema() should return the correct contents of root.schema.json', function() {
            const expected = {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "age": {
                        "type": "integer"
                    },
                    "number": {
                        "type": "integer"
                    },
                    "next": {
                        "$ref": "./test/Test_Case_1/next.schema.json"
                    }
                }
            }

            const actual = app.readSchema('./test/Test_Case_1/root.schema.json');
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });


        it('readSchema() should return the correct contents of next.schema.json', function() {
            const expected = {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "age": {
                        "type": "integer"
                    },
                    "number": {
                        "type": "integer"
                    },
                    "next": {
                        "$ref": "./test/Test_Case_1/third.schema.json"
                    }
                }
            }

            const actual = app.readSchema('./test/Test_Case_1/next.schema.json');
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });


        it('readSchema() should return the correct contents of third.schema.json', function() {
            const expected = {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "age": {
                        "type": "integer"
                    },
                    "number": {
                        "type": "integer"
                    }
                }
            }

            const actual = app.readSchema('./test/Test_Case_1/third.schema.json');
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });
        
        
        
        /* Error Handlers */

        it('readSchema() should return "Unknown file; failed to read schema" if the file does not exist', function() {
            assert.equal(app.readSchema('./test/Test_Case_1/fake.schema.json'), "Unknown file; failed to read schema");
        });

        

    });


    describe('readSchema() for Test Case 2', function() {

        /* Checks if readSchema can open a file */
        
        it('readSchema() should open root.schema.json correctly', function() {
            assert.doesNotThrow(() => { app.readSchema('./Test_Case_2/root.schema.json') }, Error, 'readSchema threw an error');
        });
        it('readSchema() should open next.schema.json correctly', function() {
            assert.doesNotThrow(() => { app.readSchema('./Test_Case_2/next.schema.json') }, Error, 'readSchema threw an error');
        });
        it('readSchema() should open third.schema.json correctly', function() {
            assert.doesNotThrow(() => { app.readSchema('./Test_Case_2/third.schema.json') }, Error, 'readSchema threw an error');
        });
        
        /* Type returned is string */
        
        it('readSchema() should return a string when fed root.schema.json', function() {
            assert.typeOf(app.readSchema('./Test_Case_2/root.schema.json'), 'string');
        });
        it('readSchema() should return a string when fed next.schema.json', function() {
            assert.typeOf(app.readSchema('./Test_Case_2/next.schema.json'), 'string');
        });
        it('readSchema() should return a string when fed third.schema.json', function() {
            assert.typeOf(app.readSchema('./Test_Case_2/third.schema.json'), 'string');
        });

        /* Correctly parsed the file and corrects makes them */
        
        it('readSchema() should return the correct contents of root.schema.json', function() {
            const expected = {
                "$ref": "./test/Test_Case_2/next.schema.json"
            }

            const actual = app.readSchema('./test/Test_Case_2/root.schema.json');
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });


        it('readSchema() should return the correct contents of next.schema.json', function() {
            const expected = {
                "type": "object",
                "description": "A Person",
                "properties": {
                    "object1": {
                        "$ref": "./test/Test_Case_2/third.schema.json"
                    },
                    "object2": {
                        "$ref": "./test/Test_Case_2/fourth.schema.json"
                    }
                }
            }
                   

            const actual = app.readSchema('./test/Test_Case_2/next.schema.json');
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });


        it('readSchema() should return the correct contents of third.schema.json', function() {
            const expected = {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "age": {
                    "type": "string"
                  },
                  "number": {
                    "type": "string"
                  }
                }
              }              


            const actual = app.readSchema('./test/Test_Case_2/third.schema.json');
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });
        
        
        it('readSchema() should return the correct contents of fourth.schema.json', function() {
            const expected = {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "integer"
                  },
                  "age": {
                    "type": "integer"
                  },
                  "number": {
                    "type": "integer"
                  }
                }
              }                            


            const actual = app.readSchema('./test/Test_Case_2/fourth.schema.json');
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });
        
        /* Error Handlers */

        it('readSchema() should return "Unknown file; failed to read schema" if the file does not exist', function() {
            assert.equal(app.readSchema('./test/Test_Case_2/fake.schema.json'), "Unknown file; failed to read schema");
        });

        

    });

    describe('writeSchema() for Test Case 1', function() {
            
            /* Type returned is string */
            
        it('writeSchema() should write to new_schema.json when fed root.schema.json', function() {
                const next = app.readSchema('./test/Test_Case_1/root.schema.json');
                app.writeSchema(next, './test/Test_Case_1/new_schema.json');
                assert.typeOf(app.readSchema('./test/Test_Case_1/new_schema.json'), 'object');
        });
        it('writeSchema() should write to new_schema.json when fed next.schema.json', function() {
                const next = app.readSchema('./test/Test_Case_1/next.schema.json');
                app.writeSchema(next, './test/Test_Case_1/new_schema.json');
                assert.typeOf(app.readSchema('./test/Test_Case_1/new_schema.json'), 'object');
        });
        it('writeSchema() should write to new_schema.json when fed third.schema.json', function() {
                const next = app.readSchema('./test/Test_Case_1/third.schema.json');
                app.writeSchema(next, './test/Test_Case_1/new_schema.json');
                assert.typeOf(app.readSchema('./test/Test_Case_1/new_schema.json'), 'object');
        });
    
        /* Correctly parsed the file and corrects makes them */
        
        it('writeSchema() should write the correct contents of root.schema.json', function() {
                const expected = {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string"
                        },
                        "age": {
                            "type": "integer"
                        },
                        "number": {
                            "type": "integer"
                        },
                        "next": {
                            "$ref": "./test/Test_Case_1/next.schema.json"
                        }
                    }
                }
    
                const root = app.readSchema('./test/Test_Case_1/root.schema.json');
                app.writeSchema(root, './test/Test_Case_1/new_schema.json');
                const actual = app.readSchema('./test/Test_Case_1/new_schema.json');
                assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });

        it('writeSchema() should write the correct contents of next.schema.json', function() {
                const expected = {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string"
                        },
                        "age": {
                            "type": "integer"
                        },
                        "number": {
                            "type": "integer"
                        },
                        "next": {
                            "$ref": "./test/Test_Case_1/third.schema.json"
                        }
                    }
                }
    
                const next = app.readSchema('./test/Test_Case_1/next.schema.json');
                app.writeSchema(next, './test/Test_Case_1/new_schema.json');
                const actual = app.readSchema('./test/Test_Case_1/new_schema.json');
                assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });

        it('writeSchema() should write the correct contents of third.schema.json', function() {
                const expected = {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string"
                        },
                        "age": {
                            "type": "integer"
                        },
                        "number": {
                            "type": "integer"
                        }
                    }
                }
    
                const third = app.readSchema('./test/Test_Case_1/third.schema.json');
                app.writeSchema(third, './test/Test_Case_1/new_schema.json');
                const actual = app.readSchema('./test/Test_Case_1/new_schema.json');
                assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });

        /* "Unknown file; failed to read schema" if the file does not exist */

        it('writeSchema() should write to failed_schema "Unknown file; failed to read schema" if the file does not exist', function() {
            const next = app.readSchema('./test/Test_Case_1/fake.schema.json');
            app.writeSchema(next, './test/Test_Case_2/new_schema.json');
            assert.equal(app.readSchema('./test/Test_Case_2/new_schema.json'), "Unknown file; failed to read schema");
        });

    });


    describe('writeSchema() for Test Case 2', function() {
            
            /* Type returned is string */
            
        it('writeSchema() should write to new_schema.json when fed root.schema.json', function() {
                const next = app.readSchema('./test/Test_Case_2/root.schema.json');
                app.writeSchema(next, './test/Test_Case_2/new_schema.json');
                assert.typeOf(app.readSchema('./test/Test_Case_2/new_schema.json'), 'object');
        });
        it('writeSchema() should write to new_schema.json when fed next.schema.json', function() {
                const next = app.readSchema('./test/Test_Case_2/next.schema.json');
                app.writeSchema(next, './test/Test_Case_2/new_schema.json');
                assert.typeOf(app.readSchema('./test/Test_Case_2/new_schema.json'), 'object');
        });
        it('writeSchema() should write to new_schema.json when fed third.schema.json', function() {
                const next = app.readSchema('./test/Test_Case_2/third.schema.json');
                app.writeSchema(next, './test/Test_Case_2/new_schema.json');
                assert.typeOf(app.readSchema('./test/Test_Case_2/new_schema.json'), 'object');
        });
    
        /* Correctly parsed the file and corrects makes them */
        
        it('writeSchema() should write the correct contents of root.schema.json', function() {
                const expected = {
                    "$ref": "./test/Test_Case_2/next.schema.json"
                }
    
                const root = app.readSchema('./test/Test_Case_2/root.schema.json');
                app.writeSchema(root, './test/Test_Case_2/new_schema.json');
                const actual = app.readSchema('./test/Test_Case_2/new_schema.json');
                assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });

        it('writeSchema() should write the correct contents of next.schema.json', function() {
                const expected = {
                    "type": "object",
                    "description": "A Person",
                    "properties": {
                        "object1": {
                            "$ref": "./test/Test_Case_2/third.schema.json"
                        },
                        "object2": {
                            "$ref": "./test/Test_Case_2/fourth.schema.json"
                        }
                    }
                }
                
                
    
                const next = app.readSchema('./test/Test_Case_2/next.schema.json');
                app.writeSchema(next, './test/Test_Case_2/new_schema.json');
                const actual = app.readSchema('./test/Test_Case_2/new_schema.json');
                assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });

        it('writeSchema() should write the correct contents of third.schema.json', function() {
                const expected = {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "age": {
                        "type": "string"
                      },
                      "number": {
                        "type": "string"
                      }
                    }
                  }
    
                const third = app.readSchema('./test/Test_Case_2/third.schema.json');
                app.writeSchema(third, './test/Test_Case_2/new_schema.json');
                const actual = app.readSchema('./test/Test_Case_2/new_schema.json');
                assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });


        it('writeSchema() should write the correct contents of fourth.schema.json', function() {
                const expected = {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "integer"
                      },
                      "age": {
                        "type": "integer"
                      },
                      "number": {
                        "type": "integer"
                      }
                    }
                  }
                  
    
                const fourth = app.readSchema('./test/Test_Case_2/fourth.schema.json');
                app.writeSchema(fourth, './test/Test_Case_2/new_schema.json');
                const actual = app.readSchema('./test/Test_Case_2/new_schema.json');
                assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });

        /* "Unknown file; failed to read schema" if the file does not exist */

        it('writeSchema() should write to failed_schema "Unknown file; failed to read schema" if the file does not exist', function() {
            const next = app.readSchema('./test/Test_Case_1/fake.schema.json');
            app.writeSchema(next, './test/Test_Case_2/new_schema.json');
            assert.equal(app.readSchema('./test/Test_Case_2/new_schema.json'), "Unknown file; failed to read schema");
        });

    });

    describe('searchForRef() combines references', function() {

        it('searchForRef() should return an object', function() {
            const root = app.readSchema('./test/Test_Case_1/root.schema.json');
            assert.typeOf(app.searchForRef(root), 'object');
        });  
        
        it('searchForRef() should return a valid schema', function() {
            const root = app.readSchema('./test/Test_Case_1/root.schema.json');
            const actual = app.searchForRef(root);
            assert.doesNotThrow(() => { JSON.parse(actual) }, Error, 'searchForRef threw an error');
        });     

        it('searchForRef() should combine one reference schema', function() {
            const expected = {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "age": {
                        "type": "integer"
                    },
                    "number": {
                        "type": "integer"
                    },
                    "next": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "age": {
                                "type": "integer"
                            },
                            "number": {
                                "type": "integer"
                            }
                        }
                    }
                }
            }
            
            const root = app.readSchema('./test/Test_Case_1/next.schema.json');
            const actual = app.searchForRef(root);
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });

        it('searchForRef() should combine two reference schemas in parallel', function() {
            const expected = {
                "type": "object",
                "description": "A Person",
                "properties": {
                    "object1": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "age": {
                                "type": "string"
                            },
                            "number": {
                                "type": "string"
                            }
                        }
                    },
                    "object2": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "integer"
                            },
                            "age": {
                                "type": "integer"
                            },
                            "number": {
                                "type": "integer"
                            }
                        }
                    }
                }
            }
            
            const root = app.readSchema('./test/Test_Case_2/next.schema.json');
            const actual = app.searchForRef(root);
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });

        it('searchForRef() should combine two reference schemas in series', function() {
            const expected = {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "age": {
                        "type": "integer"
                    },
                    "number": {
                        "type": "integer"
                    },
                    "next": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "age": {
                                "type": "integer"
                            },
                            "number": {
                                "type": "integer"
                            },
                            "next": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    },
                                    "age": {
                                        "type": "integer"
                                    },
                                    "number": {
                                        "type": "integer"
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
            const root = app.readSchema('./test/Test_Case_1/root.schema.json');
            const actual = app.searchForRef(root);
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });

        

    });

    describe('combineSchemas() for Test Case 1', function(){

        it('combineSchemas() should return an object', function() {
            assert.typeOf(app.combineSchemas('./test/Test_Case_1/root.schema.json'), 'object');
        });

        it('combineSchemas() should return a valid schema', function() {
            const actual = app.combineSchemas('./test/Test_Case_1/root.schema.json');
            assert.doesNotThrow(() => { JSON.parse(actual) }, Error, 'combineSchemas threw an error');
        });

        it('Correctly combines Test Case 1', function(){
            let schema = app.combineSchemas('./test/Test_Case_1/root.schema.json');
            app.writeSchema(schema, './test/Test_Case_1/new_schema.json');
            const expected = {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "age": {
                        "type": "integer"
                    },
                    "number": {
                        "type": "integer"
                    },
                    "next": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "age": {
                                "type": "integer"
                            },
                            "number": {
                                "type": "integer"
                            },
                            "next": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    },
                                    "age": {
                                        "type": "integer"
                                    },
                                    "number": {
                                        "type": "integer"
                                    }
                                }
                            }
                        }
                    }
                }
            }
            const actual = app.readSchema('./test/Test_Case_1/new_schema.json');
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });

        

    });

    describe('combineSchemas() for Test Case 2', function(){

        it('combineSchemas() should return an object', function() {
            assert.typeOf(app.combineSchemas('./test/Test_Case_2/root.schema.json'), 'object');
        });

        it('combineSchemas() should return a valid schema', function() {
            const actual = app.combineSchemas('./test/Test_Case_2/root.schema.json');
            assert.doesNotThrow(() => { JSON.parse(actual) }, Error, 'combineSchemas threw an error');
        });

        it('Correctly combines Test Case 2', function(){
            let schema = app.combineSchemas('./test/Test_Case_2/root.schema.json');
            // console.log(schema);
            app.writeSchema(schema, './test/Test_Case_2/new_schema.json');
            const expected = {
                "type": "object",
                "description": "A Person",
                "properties": {
                    "object1": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "age": {
                                "type": "string"
                            },
                            "number": {
                                "type": "string"
                            }
                        }
                    },
                    "object2": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "integer"
                            },
                            "age": {
                                "type": "integer"
                            },
                            "number": {
                                "type": "integer"
                            }
                        }
                    }
                }
            }
            const actual = app.readSchema('./test/Test_Case_2/new_schema.json');
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });

        

    });

    describe('combineSchemas() for Test Case 3', function(){

        it('combineSchemas() should return an object', function() {
            assert.typeOf(app.combineSchemas('./test/Test_Case_3/root.schema.json'), 'object');
        });

        it('combineSchemas() should return a valid schema', function() {
            const actual = app.combineSchemas('./test/Test_Case_3/root.schema.json');
            assert.doesNotThrow(() => { JSON.parse(actual) }, Error, 'combineSchemas threw an error');
        });

        it('Correctly combines Test Case 3', function(){
            let schema = app.combineSchemas('./test/Test_Case_3/root.schema.json');
            // console.log(schema);
            app.writeSchema(schema, './test/Test_Case_3/new_schema.json');
            const expected = {
                "$schema": "http://json-schema.org/draft-07/schema#",
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "address": {
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "type": "object",
                        "properties": {
                            "street": {
                                "type": "string"
                            },
                            "city": {
                                "type": "string"
                            },
                            "state": {
                                "$schema": "http://json-schema.org/draft-07/schema#",
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    },
                                    "abbreviation": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
            const actual = app.readSchema('./test/Test_Case_3/new_schema.json');
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });

        

    });

    describe('combineSchemas() for Test Case 4', function(){

        it('combineSchemas() should return an object', function() {
            assert.typeOf(app.combineSchemas('./test/Test_Case_4/root.schema.json'), 'object');
        });

        it('combineSchemas() should return a valid schema', function() {
            const actual = app.combineSchemas('./test/Test_Case_4/root.schema.json');
            assert.doesNotThrow(() => { JSON.parse(actual) }, Error, 'combineSchemas threw an error');
        });

        it('Correctly combines Test Case 4', function(){
            let schema = app.combineSchemas('./test/Test_Case_4/root.schema.json');
            // console.log(schema);
            app.writeSchema(schema, './test/Test_Case_4/new_schema.json');
            const expected = {
                "$schema": "http://json-schema.org/draft-07/schema#",
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "address": {
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "type": "object",
                        "properties": {
                            "street": {
                                "type": "string"
                            },
                            "city": {
                                "type": "string"
                            },
                            "state": {
                                "$schema": "http://json-schema.org/draft-07/schema#",
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    },
                                    "abbreviation": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "phone": {
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "type": "object",
                        "properties": {
                            "home": {
                                "type": "string"
                            },
                            "work": {
                                "type": "string"
                            },
                            "cell": {
                                "type": "string"
                            }
                        }
                    },
                    "credit_card": {
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "type": "object",
                        "properties": {
                            "cardNumber": {
                                "type": "string"
                            },
                            "expirationDate": {
                                "type": "string"
                            },
                            "securityCode": {
                                "type": "string"
                            },
                            "billingAddress": {
                                "$schema": "http://json-schema.org/draft-07/schema#",
                                "type": "object",
                                "properties": {
                                    "street": {
                                        "type": "string"
                                    },
                                    "city": {
                                        "type": "string"
                                    },
                                    "state": {
                                        "$schema": "http://json-schema.org/draft-07/schema#",
                                        "type": "object",
                                        "properties": {
                                            "name": {
                                                "type": "string"
                                            },
                                            "abbreviation": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "other_property": {
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "type": "object",
                        "properties": {
                            "street": {
                                "type": "string"
                            },
                            "city": {
                                "type": "string"
                            },
                            "state": {
                                "$schema": "http://json-schema.org/draft-07/schema#",
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    },
                                    "abbreviation": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
            const actual = app.readSchema('./test/Test_Case_4/new_schema.json');
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });

        

    });

});