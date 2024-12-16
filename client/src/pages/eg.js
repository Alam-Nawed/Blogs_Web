let str = "My name is Vidhi";

// ym eman si ihdiv

function rev(str) {
    let revStr = "";
    let word = "";

    for(let i=0; i<=str.length; i++) {
        if(str[i] !== ' ') {
            word = str[i] + word;
        }
        else {
            revStr += word + ' ';
            word = '';
        }
    }

    return revStr;
}