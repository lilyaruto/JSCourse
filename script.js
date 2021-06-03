let link = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=&json";
let date = "";

const renderLink = date => {
    if (date === "") {
        return link;
    } else {
        if (link.charAt(66) === "&") {
            link = link.replace("=", "=" + date);
        } else {
            let temp = link.substring(65, 74);
            link = link.replace(temp, "=" + date);
        }
        console.log(link);
        return link;
    }

    
}

const setListener = () => {
    $("#submitButton").click(e => {
        date = $('#date').val();
        date = String(date).replaceAll("-", "");
        link = renderLink(date);
    });
}

const renderData = info => {
    let htmlStr = '';
        for(let line of info) {
            htmlStr += `<tr>
            <td>${line.txt}</td>
            <td>${line.rate}</td>
        </tr>`;
        }
        $('table > tbody').html(htmlStr);
}

const getFinal = () => {
    let tempInfo = [];
    fetch(link)
    .then(res => res.json()).then(data => {
        tempInfo = data.map(line => {
            return {
                txt: line.txt,
                rate: line.rate
            }
        });
        renderData(tempInfo);
        setListener();
    });
    return tempInfo;
}

const getData = () => {
    let info = getFinal();
}

getData();