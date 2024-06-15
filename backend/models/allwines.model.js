const dbConn = require('../config/db');

const AllWines = function (all) {
    this.winery = all.winery;
    this.wine = all.wine;
    this.rating = all.rating.average;
    // this.average = all.average;
    // this.reviews = all.reviews;
    this.location = all.location;
}

//get all wines
AllWines.getAllWines = (result) => {
  dbConn.query("SELECT * FROM all_wines", (err, res) => {
    if (err) {
      console.log("Error while fetching allwines", err);
      result(null, err);
    } else {
    //  console.log("Wine fetched successfully");
      result(null, res);
    }
  });
};


//get wine by type
AllWines.getWineByType = (type, result) => {
  dbConn.query(
    "SELECT * FROM all_wines WHERE type = ?",
    type,
    (err, res) => {
      if (err) {
       console.log("Error while fetching data by type", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

  // create new wine
  AllWines.createNewWine = (allWinesReqData, result) => {
    dbConn.query(
      "INSERT INTO all_wines SET ?",
      allWinesReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("Wine created successfully");
          result(null, res);
        }
      }
    );
  };
  //get wine by ID for update
  AllWines.getWineByID = (id, result) => {
    dbConn.query("SELECT * FROM all_wines WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching wine by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update wine
 AllWines.updateWine = (id, allwinesReqData, result) => {
    dbConn.query(
      "UPDATE all_wines SET winery=?, wine=?, rating=?, location=?  WHERE id = ?",
      [allwinesReqData.winery, allwinesReqData.wine, allwinesReqData.rating, allwinesReqData.location, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating wine");
          result(null, err);
        } else {
          console.log("wine updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete wine
  AllWines.deleteWine = (id, result) => {
    dbConn.query("DELETE from all_wines WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the wine");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = AllWines;