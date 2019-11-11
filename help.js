const options = [
    {
        option: "-s",
        description: "prints time in seconds"
    }
];

module.exports = () => {
    console.info(
        "Usage: ittakes [OPTION]... -c [CMD]\n"
    );
    options.forEach(item => {
        console.info(" ",item.option, item.description);
    });
}