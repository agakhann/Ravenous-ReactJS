const apiKey =
  "S8qU8dDBzMpbQpfj_VX9OfV0hRjzbBzAjyvuUzA1hHSUFg-EwnsVIVUTZF2qCMwgwurn5376NU-w8BoxRAQbJ2dusW77KAuReoNrOnLVGKoTYRhlRVfvFM7144ogZHYx";

export const Yelp = {
  async searchYelp(term, location, sortBy) {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Wrong Input!");
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          console.log(jsonResponse);
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
              url: business.url,
            };
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
