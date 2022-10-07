const make_album =(name, title , tracksNo  ) => {
   let album = {}
                if(name) album.artistName = name;
                if(title) album.album_Title = title;
                if(tracksNo) album.tracks = tracksNo;

   return console.log(album);;             
}

make_album("Bad Bunny", "X 100pre");
make_album("Yes", "Close to the Edge");
make_album("Fiona Apple", "Extraordinary Machine");
make_album("The weeknd","Beauty Behind the Madness", 55);