function areAnagrams(str1, str2){
    const formatString = (str) =>
        str.toLowerCase().split('').sort().join('');

    return formatString(str1) === formatString(str2);
}

module.exports = areAnagrams