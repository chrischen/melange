// Generated by Melange
'use strict';


function isfree(id, _param) {
  while(true) {
    var param = _param;
    switch (param.TAG | 0) {
      case /* Pident */0 :
          return id === param._0;
      case /* Pdot */1 :
          _param = param._0;
          continue ;
      case /* Papply */2 :
          if (isfree(id, param._0)) {
            return true;
          }
          _param = param._1;
          continue ;
      
    }
  };
}

exports.isfree = isfree;
/* No side effect */