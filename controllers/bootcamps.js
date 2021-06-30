exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all the bootcamps" });
};

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Bootcamp created" });
};

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Updated the bootcamp ${req.params.id}` });
};

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Deleted the bootcamp ${req.params.id}` });
};
