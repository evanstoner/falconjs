/**
 * contains all method definitions for API: foundry logscale
 * consumed and interpreted by Falcon.command(...)
 */
export var _foundry_logscale_endpoints: Array<any> = [
    ["ListReposV1", "GET", "/loggingapi/combined/repos/v1", "Lists available repositories and views", "foundry_logscale", []],
    ["IngestDataV1", "POST", "/loggingapi/entities/data-ingestion/ingest/v1", "Ingest data into the application repository", "foundry_logscale", [{
        "type": "file",
        "description": "Data file to ingest",
        "name": "data_file",
        "in": "formData",
        "required": 1
    }, {
        "type": "array",
        "items": {
            "type": "string"
        },
        "description": "Custom tag for ingested data in the form tag:value",
        "name": "tag",
        "in": "formData"
    }, {
        "type": "string",
        "description": "Tag the data with the specified source",
        "name": "tag_source",
        "in": "formData"
    }, {
        "type": "boolean",
        "default": 0,
        "description": "Tag the data with test-ingest",
        "name": "test_data",
        "in": "formData"
    }]],
    ["CreateSavedSearchesDynamicExecuteV1", "POST", "/loggingapi/entities/saved-searches/execute-dynamic/v1", "Execute a dynamic saved search", "foundry_logscale", [{
        "type": "boolean",
        "default": 0,
        "description": "Include generated schemas in the response",
        "name": "include_schema_generation",
        "in": "query"
    }, {
        "type": "boolean",
        "default": 0,
        "description": "Include test data when executing searches",
        "name": "include_test_data",
        "in": "query"
    }, {
        "type": "boolean",
        "default": 0,
        "description": "Whether to include metadata in the response",
        "name": "metadata",
        "in": "query"
    }, {
        "enum": ["sync", "async"],
        "type": "string",
        "description": "Mode to execute the query under.",
        "name": "mode",
        "in": "query"
    }, {
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["GetSavedSearchesExecuteV1", "GET", "/loggingapi/entities/saved-searches/execute/v1", "Get the results of a saved search", "foundry_logscale", [{
        "type": "string",
        "description": "Job ID for a previously executed async query",
        "name": "job_id",
        "in": "query",
        "required": 1
    }, {
        "minimum": 0,
        "type": "string",
        "description": "Maximum number of records to return.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "boolean",
        "default": 0,
        "description": "Whether to include metadata in the response",
        "name": "metadata",
        "in": "query"
    }, {
        "minimum": 0,
        "type": "string",
        "description": "Starting pagination offset of records to return.",
        "name": "offset",
        "in": "query"
    }, {
        "pattern": "v?([0-9]+)(\\.[0-9]+)?(\\.[0-9]+)?(-([0-9A-Za-z\\-]+(\\.[0-9A-Za-z\\-]+)*))?(\\+([0-9A-Za-z\\-]+(\\.[0-9A-Za-z\\-]+)*))?",
        "type": "string",
        "description": "Version of resource being created",
        "name": "version",
        "in": "query"
    }]],
    ["CreateSavedSearchesExecuteV1", "POST", "/loggingapi/entities/saved-searches/execute/v1", "Execute a saved search", "foundry_logscale", [{
        "type": "boolean",
        "default": 0,
        "description": "Whether to include search field details",
        "name": "detailed",
        "in": "query"
    }, {
        "type": "boolean",
        "default": 0,
        "description": "Include test data when executing searches",
        "name": "include_test_data",
        "in": "query"
    }, {
        "type": "boolean",
        "default": 0,
        "description": "Whether to include metadata in the response",
        "name": "metadata",
        "in": "query"
    }, {
        "enum": ["sync", "async", "async_offload"],
        "type": "string",
        "description": "Mode to execute the query under.  If provided, takes precedence over the mode provided in the body.",
        "name": "mode",
        "in": "query"
    }, {
        "pattern": "v?([0-9]+)(\\.[0-9]+)?(\\.[0-9]+)?(-([0-9A-Za-z\\-]+(\\.[0-9A-Za-z\\-]+)*))?(\\+([0-9A-Za-z\\-]+(\\.[0-9A-Za-z\\-]+)*))?",
        "type": "string",
        "description": "Version of resource being created",
        "name": "version",
        "in": "query"
    }, {
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["CreateSavedSearchesIngestV1", "POST", "/loggingapi/entities/saved-searches/ingest/v1", "Populate a saved search", "foundry_logscale", []],
    ["GetSavedSearchesJobResultsDownloadV1", "GET", "/loggingapi/entities/saved-searches/job-results-download/v1", "Get the results of a saved search as a file", "foundry_logscale", [{
        "type": "string",
        "description": "Job ID for a previously executed async query",
        "name": "job_id",
        "in": "query",
        "required": 1
    }, {
        "enum": ["json", "csv"],
        "type": "string",
        "description": "Result Format",
        "name": "result_format",
        "in": "query"
    }]],
    ["ListViewV1", "GET", "/loggingapi/entities/views/v1", "List views", "foundry_logscale", []]
];