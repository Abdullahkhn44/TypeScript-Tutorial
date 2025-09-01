var contract = function (prop) {
    console.log('name is' + prop.name + 'Bname' + prop.buisnessName);
};
contract({
    name: 'Abdullah',
    buisnessName: 'Falcon Movers',
    noOfOutlets: 4
});
