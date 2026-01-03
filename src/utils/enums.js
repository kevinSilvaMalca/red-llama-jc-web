const HttpResponseEnum = Object.freeze({
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
});

const HttpTypeEnum = Object.freeze({
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
});

export { HttpResponseEnum, HttpTypeEnum };
