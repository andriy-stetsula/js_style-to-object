'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(styles) {
  const result = {};

  styles.split(';').forEach((item) => {
    if (!item.trim()) {
      return;
    }

    const [key, value] = item.split(':');

    if (!key || !value) {
      return;
    }

    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
