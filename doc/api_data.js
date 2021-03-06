define({ "api": [
  {
    "type": "get",
    "url": "/{datetime}",
    "title": "getTime",
    "description": "<p>Converts either a UNIX or human-readable Date string into a JSON object representing both</p>",
    "name": "getTime",
    "group": "TimestampMicroservice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "datetime",
            "description": "<p>Either a UNIX timestamp or a human-readable date string</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "https://timestamp-microservice-logan.herokuapp.com/1358035200",
        "type": "url"
      },
      {
        "title": "Request-Example:",
        "content": "https://timestamp-microservice-logan.herokuapp.com/January 13 2013",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "unix",
            "description": "<p>The UNIX timestamp of the input date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "natural",
            "description": "<p>The human readable datestring of the input date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"unix\":1358035200,\"natural\":\"January 13 2013\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "TimestampMicroservice"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_ubuntu_workspace_API_Timestamp_Microservice_doc_main_js",
    "groupTitle": "_home_ubuntu_workspace_API_Timestamp_Microservice_doc_main_js",
    "name": ""
  }
] });
