var playlist = {artist: "song"};

function updatePlaylist(playlist, AFI, Death){
  playlist["AFI"] = "Death";
  return playlist
}

function removeFromPlaylist(playlist, AFI){
  delete playlist.AFI;
  return playlist
}
