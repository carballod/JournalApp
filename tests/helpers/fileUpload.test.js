import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: 'dp9exvzgm',
  api_key: '133534483958326',
  api_secret: 'aBVQ8hF38onPpaHKe6lf3uV2qt0A',
  secure: true
});

describe("Pruebas en fileUpload", () => {

  // test("Debe subir el archivo correctamente a cloudinary", async() => {

  //   const imageUrl = "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png";
  //   const resp = await fetch( imageUrl );
  //   const blob =  await resp.blob();
  //   const file = new File([blob], "foto.png");

  //   const url = await fileUpload( file );
  //   expect( typeof url ).toBe("string");

  //   const segments = url.split("/");
  //   const imageId = segments[ segments.length - 1 ].replace(".png", "");

  //   const folderName = "journal";
  //   cloudinary.api.delete_resources(`${folderName}/${imageId}`,
  //   (error, result) => {
  //     console.log(error, result);
  //   });

  // });

  test('Debe retornar null', async() => {

    const file = new File([], "foto.png");
    const url = await fileUpload( file );
    expect( url ).toBe( null );

  })

});
