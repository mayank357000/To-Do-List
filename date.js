
exports.getDate= function(){
  const today =new Date();
  const options={weekday:'long', //ye part google search se tapa "js date format" search krke
  day:'numeric',
  month:'long'
  };

  return today.toLocaleDateString("hi-IN", options);;
};

exports.getDay= function(){
  const today =new Date();
  const options={weekday:'long'
  };

  return today.toLocaleDateString("hi-IN", options); ;
};
