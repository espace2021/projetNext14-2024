export const mapDatabaseIdToStandardId = (objet) => {
    if (objet._id) {
      objet.id = objet._id;
      delete objet._id;
    }
    return objet;
  };

  