export const successResponse = (data, message = 'Success', status = 200) => {
  return new Response(JSON.stringify({ status: 'success', data, message }), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
};

export const resourceNotFoundResponse = (message = 'Resource not found', status = 404) => {
  return new Response(JSON.stringify({ status: 'error', message }), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

export const errorResponse = (error, message = 'An error occurred', status = 500) => {
  return new Response(JSON.stringify({ status: 'error', error, message }), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
};
