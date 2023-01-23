function _extends () { 
  let _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) { 
      var source = arguments[i]; for (var key in source) { 
        if (Object.prototype.hasOwnProperty.call(source, key)) { 
          target[key] = source[key]; 
        } 
      } 
    } 
    return target; 
  }; 
  return _extends.apply(this, arguments); 
}

import axios from 'axios';
import qs from 'qs';
import configuration from './configure';

var getOptions = function getOptions() {
  var options = {
    headers: {}
  };
  if (configuration.apiKey) options.headers['X-Api-Key'] = configuration.apiKey;
  return options;
};

var get = async function get(type, args) {
  const response = await axios.get(configuration.host + "/" + type + (args && '?' + qs.stringify(args)), getOptions());
  return response.data;
};

export default (function (type) {
  return {
    find: async function find(id) {
      const response = await axios(configuration.host + "/" + type + "/" + id, getOptions());
      return response.data.data;
    },
    where: function where(args) {
      return get(type, args);
    },
    all: function all(args, data) {
      if (args === void 0) {
        args = {};
      }

      if (data === void 0) {
        data = [];
      }

      var getAll = function getAll(type, args) {
        var page = args.page ? args.page + 1 : 1;
        return get(type, _extends({}, args, {
          page: page
        })).then(function (response) {
          var _data;
          
          (_data = data).push.apply(_data, response.data);

          if (!response.totalCount || response.pageSize * response.page >= response.totalCount) {
            return data;
          }

          // return getAll(type, _extends({}, args, {
          //   page: page
          // }));
        })["catch"](function (error) {
          return console.error(error);
        });
      };

      return getAll(type, args);
    }
  };
});