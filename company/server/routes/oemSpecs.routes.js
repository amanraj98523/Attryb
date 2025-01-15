const get_oemSpecs = (req, res) => {
  res.send("Get OEM Specs");
};

const add_oemSpecs = (req, res) => {
  res.send("Add OEM Specs");
};

const delete_oemSpecs = (req, res) => {
  res.send(`Delete OEM Specs with ID: ${req.params.id}`);
};

const getSingle_oemSpecs = (req, res) => {
  res.send(`Get Single OEM Spec with ID: ${req.params.id}`);
};

module.exports = {
  get_oemSpecs,
  add_oemSpecs,
  delete_oemSpecs,
  getSingle_oemSpecs,
};
