var permutation = function(s) {
        let result = [];
        for (const iterator of s.split('')) {
          let cur = [];
          if(result.length === 0) {
            result.push(iterator);
            continue;
          }
          for (const item of result) {
            for(let i = 0 ; i <= item.length ; i++) {
              let value = item.split('');
              value.splice(i,0,iterator);
              if(Array.from(new Set(value)).length === value.length) cur.push(value.join(''))
            }
          }
          result = Array.from(new Set(cur));
        }
        return result
      };