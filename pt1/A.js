
const input_data = [ 
    { name: "Alex", tel: "0991112222", code: "xsf0001"},
    { name: "Jane", tel: "0812221234", code: "xsf0002"},
    { name: "Alex", tel: "0832214433", code: "xsf0001"},
    { name: "Alex", tel: "0991113122", code: "xsf0003"}
];

// Assume that Input data pass dto already
const convert_to_like_code_form = (data) => {
    if (!Array.isArray(data)) {
        return []
    }

    let new_data = []
    let dataset = data;
    while (dataset.length > 0) {
        const same_code_data_list = dataset.filter((item) => item.code === dataset[0]. code)
        const new_tel = same_code_data_list.length !== 0 ? same_code_data_list.map((item) => item.tel) : dataset[0].tel
        new_data = [ ...new_data, {
            name: dataset[0].name,
            tel: new_tel.length > 1 ? new_tel : new_tel[0],
            code: dataset[0].code,
        }]

        const distinc_code_data_list = dataset.filter((item) => item.code !== dataset[0]. code)
        dataset = distinc_code_data_list
    }

    return new_data;
};

const output_data = [
    { name: "Alex", tel: [ "0991112222", "0832214433" ], code: "xsf0001"},
    { name: "Jane", tel: "0812221234", code: "xsf0002"},
    { name: "Alex", tel: "0991113122", code: "xsf0003"}
]

console.log(convert_to_like_code_form(input_data));
JSON.stringify(convert_to_like_code_form(input_data)) === JSON.stringify(output_data) ? console.log("TEST Pt1 A PASS") : console.log("TEST Pt1 A NOT PASS")