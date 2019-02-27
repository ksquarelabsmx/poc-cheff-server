define({ "api": [
  {
    "type": "get",
    "url": "/v1/events/:id",
    "title": "Get an event",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>event id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "event",
            "description": "<p>events collection</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "event.id",
            "description": "<p>event id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "event.name",
            "description": "<p>event name</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.start_date",
            "description": "<p>event start date epoch</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.end_date",
            "description": "<p>event end date epoch</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.poc_chuc_torta_unit_price",
            "description": "<p>event Poc Chuc torta price</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.poc_chuc_torta_amount",
            "description": "<p>event Poc Chuc torta amount</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.shrimp_torta_unit_price",
            "description": "<p>event shrimp torta price</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.shrimp_torta_amount",
            "description": "<p>event shrimp torta amount</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.total",
            "description": "<p>event total price</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event.orders",
            "description": "<p>event orders</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "event.orders.id",
            "description": "<p>event orders id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "event.orders.full_name",
            "description": "<p>event orders full name</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.orders.poc_chuc_torta_unit_price",
            "description": "<p>event Poc Chuc torta price</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.orders.poc_chuc_torta_amount",
            "description": "<p>event order Poc Chuc torta amount</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.orders.shrimp_torta_unit_price",
            "description": "<p>event shrimp torta price</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.orders.shrimp_torta_amount",
            "description": "<p>event order shrimp torta amount</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.orders.total",
            "description": "<p>event order total price</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "event.orders.paid",
            "description": "<p>event order paid status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 1.1 200 Ok\n{\n  \"event\": {\n    \"id\": \"1\",\n    \"name\": \"Tortas para la oficina\",\n    \"start_date\": 10000,\n    \"end_date\": 20000,\n    \"poc_chuc_torta_unit_price\": 10,\n    \"poc_chuc_torta_amount\": 2,\n    \"shrimp_torta_unit_price\": 12\n    \"shrimp_torta_amount\": 2,\n    \"total\": 44,\n    \"orders\": [\n      {\n        \"id\": \"1\",\n        \"full_name\": \"Juan Carlos\",\n        \"poc_chuc_torta_unit_price\": 10,\n        \"poc_chuc_torta_amount\": 1,\n        \"shrimp_torta_unit_price\": 12\n        \"shrimp_torta_amount\": 1,\n        \"total\": 22,\n        \"paid\": false\n      },\n      {\n        \"id\": \"2\",\n        \"full_name\": \"Juan Carlitos\",\n        \"poc_chuc_torta_unit_price\": 10,\n        \"poc_chuc_torta_amount\": 2,\n        \"shrimp_torta_unit_price\": 12\n        \"shrimp_torta_amount\": 2,\n        \"total\": 44,\n        \"paid\": true\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Event doesn't exist",
          "content": "HTTP 1.1 404 Not Found\n{\n  \"status\": 404,\n  \"message\": \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Get event error",
          "content": "HTTP 1.1 500 Internal Server Error\n{\n  \"code:\": 500,\n  \"message\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/v1/event.ts",
    "groupTitle": "Events",
    "name": "GetV1EventsId"
  },
  {
    "type": "get",
    "url": "/v1/events?type=:type",
    "title": "Get all events",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>event type (past | current)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>events collection</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "event.id",
            "description": "<p>event id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "event.name",
            "description": "<p>event name</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.start_date",
            "description": "<p>event start date epoch</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.end_date",
            "description": "<p>event end date epoch</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.poc_chuc_torta_unit_price",
            "description": "<p>event Poc Chuc torta price</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.poc_chuc_torta_amount",
            "description": "<p>event Poc Chuc torta amount</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.shrimp_torta_unit_price",
            "description": "<p>event shrimp torta price</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.shrimp_torta_amount",
            "description": "<p>event shrimp torta amount</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.total",
            "description": "<p>event total price</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 1.1 200 Ok\n{\n \"events\": [\n    {\n      \"id\": \"1\",\n      \"name\": \"Tortas para la oficina\",\n      \"start_date\": 10000,\n      \"end_date\": 20000,\n      \"poc_chuc_torta_unit_price\": 10,\n      \"poc_chuc_torta_amount\": 1,\n      \"shrimp_torta_unit_price\": 12\n      \"shrimp_torta_amount\": 1,\n      \"total\": 22\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get event error",
          "content": "HTTP 1.1 500 Internal Server Error\n{\n  \"code:\": 500,\n  \"message\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/v1/event.ts",
    "groupTitle": "Events",
    "name": "GetV1EventsTypeType"
  },
  {
    "type": "post",
    "url": "/v1/events/:id",
    "title": "Create an event",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "event",
            "description": "<p>events collection</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "event.name",
            "description": "<p>event name</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "event.start_date",
            "description": "<p>event start date epoch</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "event.end_date",
            "description": "<p>event end date epoch</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "event.poc_chuc_torta_unit_price",
            "description": "<p>event Poc Chuc torta price</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "event.shrimp_torta_unit_price",
            "description": "<p>event shrimp torta price</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n \"event_name\": \"Tortastic\",\n \"start_date\": 1000,\n \"end_date\": 1000,\n \"start_hour\", 1000,\n \"end_hour\": 1000,\n \"poc_chuc_torta_unit_price\": 10,\n \"shrimp_torta_unit_price\": 12\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "event",
            "description": "<p>events collection</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "event.id",
            "description": "<p>event id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "event.name",
            "description": "<p>event name</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.start_date",
            "description": "<p>event start date epoch</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.end_date",
            "description": "<p>event end date epoch</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.poc_chuc_torta_unit_price",
            "description": "<p>event Poc Chuc torta price</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.shrimp_torta_unit_price",
            "description": "<p>event shrimp torta price</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 1.1 200 Ok\n{\n \"id\": \"1\"\n \"event_name\": \"Tortastic\",\n \"start_date\": 1000,\n \"end_date\": 1000,\n \"start_hour\", 1000,\n \"end_hour\": 1000,\n \"poc_chuc_torta_unit_price\": 10,\n \"shrimp_torta_unit_price\": 12\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "emptyName",
            "description": "<p>event_name is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "emptyStartDate",
            "description": "<p>start_date is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "beforeCurrentDate",
            "description": "<p>start_date must be a future date</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalidFormat",
            "description": "<p>start_date must be a epoch time</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "beforeStartDate",
            "description": "<p>end_date must be after start date</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "emptyStartHour",
            "description": "<p>start_hour is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notInRange",
            "description": "<p>start_hour must be in the range from 0 to 24 * 60</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "emptyEndHour",
            "description": "<p>end_hour is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "emptyPocChuPrice",
            "description": "<p>poc_chuc_torta_unit_price is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalidPrice",
            "description": "<p>poc_chuc_torta_unit_price must be a non-negative number</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "emptyShrimpPrice",
            "description": "<p>shrimp_torta_unit_price is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP 1.1 400 Bad Request\n{\n  \"status\": 400,\n  \"message\": \"Bad Request\",\n  \"errors\": [\n    {\n      \"field\": \"event_name\",\n      \"error\": \"Is required\"\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Update event error",
          "content": "HTTP 1.1 500 Internal Server Error\n{\n \"code:\": 500,\n \"message\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/v1/event.ts",
    "groupTitle": "Events",
    "name": "PostV1EventsId"
  },
  {
    "type": "put",
    "url": "/v1/events/:id",
    "title": "Update an event",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>event id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "event",
            "description": "<p>events collection</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "event.id",
            "description": "<p>event id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "event.name",
            "description": "<p>event name</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "event.start_date",
            "description": "<p>event start date epoch</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "event.end_date",
            "description": "<p>event end date epoch</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "event.poc_chuc_torta_unit_price",
            "description": "<p>event Poc Chuc torta price</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "event.shrimp_torta_unit_price",
            "description": "<p>event shrimp torta price</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n \"event_name\": \"Tortastic\",\n \"start_date\": 1000,\n \"end_date\": 1000,\n \"start_hour\", 1000,\n \"end_hour\": 1000,\n \"poc_chuc_torta_unit_price\": 10,\n \"shrimp_torta_unit_price\": 12\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "event",
            "description": "<p>events collection</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "event.id",
            "description": "<p>event id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "event.name",
            "description": "<p>event name</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.start_date",
            "description": "<p>event start date epoch</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.end_date",
            "description": "<p>event end date epoch</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.poc_chuc_torta_unit_price",
            "description": "<p>event Poc Chuc torta price</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.shrimp_torta_unit_price",
            "description": "<p>event shrimp torta price</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 1.1 200 Ok\n{\n \"id\": \"1\"\n \"event_name\": \"Tortastic\",\n \"start_date\": 1000,\n \"end_date\": 1000,\n \"start_hour\", 1000,\n \"end_hour\": 1000,\n \"poc_chuc_torta_unit_price\": 10,\n \"shrimp_torta_unit_price\": 12\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "emptyName",
            "description": "<p>event_name is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "emptyStartDate",
            "description": "<p>start_date is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "beforeCurrentDate",
            "description": "<p>start_date must be a future date</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalidFormat",
            "description": "<p>start_date must be a epoch time</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "beforeStartDate",
            "description": "<p>end_date must be after start date</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "emptyStartHour",
            "description": "<p>start_hour is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notInRange",
            "description": "<p>start_hour must be in the range from 0 to 24 * 60</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "emptyEndHour",
            "description": "<p>end_hour is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "emptyPocChuPrice",
            "description": "<p>poc_chuc_torta_unit_price is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalidPrice",
            "description": "<p>poc_chuc_torta_unit_price must be a non-negative number</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "emptyShrimpPrice",
            "description": "<p>shrimp_torta_unit_price is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP 1.1 400 Bad Request\n{\n  \"status\": 400,\n  \"message\": \"Bad Request\",\n  \"errors\": [\n    {\n      \"field\": \"event_name\",\n      \"error\": \"Is required\"\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Event is already finished",
          "content": "HTTP 1.1 400 Bad Request\n{\n  \"status\": 400,\n  \"message\": \"Bad Request\",\n  \"reason\": \"Event has already finished\"\n}",
          "type": "json"
        },
        {
          "title": "Event doesn't exist",
          "content": "HTTP 1.1 404 Not Found\n{\n  \"status\": 404,\n  \"message\": \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Update event error",
          "content": "HTTP 1.1 500 Internal Server Error\n{\n \"code:\": 500,\n \"message\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/v1/event.ts",
    "groupTitle": "Events",
    "name": "PutV1EventsId"
  },
  {
    "type": "get",
    "url": "/v1/orders",
    "title": "",
    "group": "Orders",
    "version": "0.0.0",
    "filename": "api/routes/v1/order.ts",
    "groupTitle": "Orders",
    "name": "GetV1Orders"
  },
  {
    "type": "post",
    "url": "/v1/orders",
    "title": "",
    "group": "Orders",
    "version": "0.0.0",
    "filename": "api/routes/v1/order.ts",
    "groupTitle": "Orders",
    "name": "PostV1Orders"
  }
] });
