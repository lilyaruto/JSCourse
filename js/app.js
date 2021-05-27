window.onload = function() {
    window.countries = null;

    const setListeners = () => {
        $('#search').on('keyup', e => {
            $("#selectSearch").val(""); //======================================= my changes
            let value = e.target.value;
            value = value.toLowerCase();
            let filteredCountries = window.countries.filter(country => country.name.toLowerCase().indexOf(value) > -1
                || country.capital.toLowerCase().indexOf(value) > -1
                || country.region.toLowerCase().indexOf(value) > -1);
            renderCountries(filteredCountries);
        });

        //======================================= my changes
        $("#selectSearch").change(e => {
            $('#search').val("");
            let selectedCountry = $("#selectSearch option:selected").text();
            let findCountry = window.countries.filter(country => country.name === selectedCountry);
            renderCountries(findCountry);
            
        });
        //=======================================

        $('table thead th.bg-warning').on('click touch', e => {
            let field = e.currentTarget.innerText;
            field = field.toLowerCase();
            let numerableFields = ['population', 'area'];
            let sortedCountries = window.countries.sort((a, b) => {
                // if(numerableFields.indexOf(field) > -1) {
                //     return a[field] < b[field];
                // }
                // return a[field] > b[field];

                return numerableFields.indexOf(field) > -1 ? a[field] < b[field] : a[field] > b[field];
            });
            $('table thead th.bg-warning').removeClass('bg-danger text-white');
            $(e.currentTarget).addClass('bg-danger text-white')
            renderCountries(sortedCountries);
        });

        $('td').on('click', e => {
            $('table tbody tr').removeClass('bg-dark text-white');
            $(e.currentTarget).parent('tr').addClass('bg-dark text-white');
        })
    }

    //======================================= my changes
    const updateOption = countries => {
        let selectStr = '<option value="">Not selected</option>';
        for (let country of countries) {
            selectStr += `<option value="${country.name}">${country.name}</option>`;
        }
        $('.countries-select').html(selectStr);
    };
    //=======================================

    const renderCountries = countries => {
        let htmlStr = '';
        for(let country of countries) {
            htmlStr += `<tr>
            <td>${country.name}</td>
            <td>${country.capital}</td>
            <td>${country.region}</td>
            <td>${country.population}</td>
            <td>${country.area}</td>
            <td>${country.currencies}</td>
            <td>${country.languages}</td>
            <td><img src="${country.flag}"  height="30px"/></td>
        </tr>`;

        }
        if(!countries.length) {
            htmlStr = '<tr><td colspan="8" class="text-center">Не найдено</td></tr>'
        }
        $('table > tbody').html(htmlStr);
    };

    const getData = () => {
        let countries = [];
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json()).then(data => {
                countries = data.map(country => {
                    let {name, population, capital, area, currencies, languages, flag, region} = country;
                    return {
                        name, population, capital: capital || '---', flag, region: region || '---',
                        area: area || 0,
                        currencies: currencies.map(el => el.name).join(', '),
                        languages: languages.map(el => el.name).join(', ')
                    };
                });
                window.countries = countries;
                renderCountries(countries);
                updateOption(countries); //======================================= my changes
                setListeners();
        });
    }

    getData();
}