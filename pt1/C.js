const input_data = [
	{ name: "A", age: "30" },
	{ name: "B", age: "9" },
	{ name: "C", age: "20" },
	{ name: "D", age: "18" },
	{ name: "E", age: "11" },
	{ name: "F", age: "60" },
	{ name: "G", age: "27" },
	{ name: "H", age: "90" },
	{ name: "I", age: "21" },
	{ name: "J", age: "12" },
];

// Assume that Input data pass dto already
const convert_to_c_form = (data) => {
    if (!Array.isArray(data)) {
        return []
    } 

    let new_data = [];
    let compaired_number = 9;
    for(let i=1; i<=6; i++){

        for(j=0; j<data.length; j++) {
            if (Number(data[j].age) === compaired_number) {
                new_data = [ ...new_data, data[j].name]
                continue
            }
        }

        if (i%2 === 1) {
            compaired_number = compaired_number + 3 
        } else {
            compaired_number = compaired_number + 6 
        }
    }

    return new_data;
};

// 9 12 18 21 27 30

const output_data = ["B", "J", "D", "I", "G", "A"]

console.log(convert_to_c_form(input_data));
JSON.stringify(convert_to_c_form(input_data)) === JSON.stringify(output_data) ? console.log("TEST Pt1 C PASS") : console.log("TEST Pt1 C NOT PASS")
