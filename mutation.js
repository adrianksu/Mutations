function mutation(arr) {
  var str0 = arr[0].toLowerCase();
  var str1 = arr[1].toLowerCase();
  
 for (i = 0; i < str1.length; i++) {
  if (str0.indexOf(str1[i]) == -1)
    return false;
 }
   return true;
 }

mutation(['Hello', 'hey']);
