const input_data = { 
    customer: "Xsurface", 
    contact: [
        { name: "Max" },
        { name: "Mike" },
        { name: "Adam" },
    ],
    address: "Sukhumvit 62",
}

// Assume that Input data pass dto already
const convert_to_speaded_contact_form = (data) => {
    if (!Array.isArray(data.contact)) {
        return data
    } 

    const new_data = data.contact.map((item) => {
        return {
            name: item?.name || "",
            customer: data?.customer || "",
            address: data.address || "",
        }
    })

    return new_data;
};

const output_data = [
    { 
        name: "Max",
        customer: "Xsurface", 
        address: "Sukhumvit 62",
    },
    { 
        name: "Mike",
        customer: "Xsurface", 
        address: "Sukhumvit 62",
    },{ 
        name: "Adam",
        customer: "Xsurface", 
        address: "Sukhumvit 62",
    },
];

console.log(convert_to_speaded_contact_form(input_data));
JSON.stringify(convert_to_speaded_contact_form(input_data)) === JSON.stringify(output_data) ? console.log("TEST Pt1 B PASS") : console.log("TEST Pt1 B NOT PASS")
