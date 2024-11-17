function areAnagrams(str1, str2){
    return formatString(str1) === formatString(str2);
}

const formatString = (str) =>
    str.toLowerCase().split('').sort().join('');


module.exports = areAnagrams