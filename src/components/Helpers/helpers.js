import React from 'react';
 
/**
 * Handles the response that comes from the API
 * @param {Object} response
 */
export const responseHandle = (response) => {
    return response.json()
        .then(json => {
            return response.ok ? json : Promise.reject(json)
        })
}