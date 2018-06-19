$(document).ready(function () {
	$('#Submit').click(function () {
		getAllData();
	})
});
let Country = "";
let getAllData = () => {
	var Title = $('#Title').val();
	var Year = $('#Year').val();
	var imdbID = $('#imdbID').val();
	let detail = {};
	$.ajax({
		type: 'GET', // request type GET, POST, PUT
		dataType: 'json', // requesting datatype
		url: 'https://www.omdbapi.com/?i=tt3896198&apikey=d1376393', // URL of getting data
		success: (data) => { // in case of success response
			let detailofdata = (Title, Year, imdbID, data) => {
				if (data.Title == Title || data.Year == Year || data.imdbID == imdbID) {
					let detail = data;
					console.log(detail)
		
					let tempRow =
						`<tr>
					<th scope="row">1</th>
					<td>Actors</td>
					<td>${detail.Actors}</td>
				  </tr>
				  <tr>
					<th scope="row">2</th>
					<td>Title</td>
					<td>${detail.Title}</td>
				  </tr>
				  <tr>
					<th scope="row">3</th>
					<td>BoxOffice</td>
					<td>${detail.BoxOffice}</td>
				  </tr>
				  <tr>
					<th scope="row">4</th>
					<td>Country</td>
					<td>${detail.Country}</td>
				  </tr>
				  <tr>
					<th scope="row">5</th>
					<td>DVD</td>
					<td>${detail.DVD}</td>
				  </tr>
				  <tr>
					<th scope="row">6</th>
					<td>Director</td>
					<td>${detail.Director}</td>
				  </tr>
				  <tr>
					<th scope="row">7</th>
					<td>Genre</td>
					<td>${detail.Genre}</td>
				  </tr>
				  <tr>
					<th scope="row">8</th>
					<td>Language</td>
					<td>${detail.Language}</td>
				  </tr>
				  <tr>
					<th scope="row">9</th>
					<td>Metascore</td>
					<td>${detail.Metascore}</td>
				  </tr>
				  <tr>
					<th scope="row">10</th>
					<td>Plot</td>
					<td>${detail.Plot}</td>
				  </tr>
				  <tr>
					<th scope="row">11</th>
					<td>Year</td>
					<td>${detail.Year}</td>
				  </tr>
				  <tr>
					<th scope="row">12</th>
					<td>Production</td>
					<td>${detail.Production}</td>
				  </tr>
				  <tr>
					<th scope="row">13</th>
					<td>Rated</td>
					<td>${detail.Rated}</td>
				  </tr>
				  <tr>
					<th scope="row">14</th>
					<td>Released</td>
					<td>${detail.Released}</td>
				  </tr>
				  <tr>
					<th scope="row">15</th>
					<td>Response</td>
					<td>${detail.Response}</td>
				  </tr>
				  <tr>
					<th scope="row">16</th>
					<td>Runtime</td>
					<td>${detail.Runtime}</td>
				  </tr>
				  <tr>
					<th scope="row">17</th>
					<td>Awards</td>
					<td>${detail.Awards}</td>
				  </tr>
				  <tr>
					<th scope="row">18</th>
					<td>Type</td>
					<td>${detail.Type}</td>
				  </tr>
				  <tr>
					<th scope="row">19</th>
					<td>Website</td>
					<td>${detail.Website}</td>
				  </tr>
				  <tr>
					<th scope="row">20</th>
					<td>Writer</td>
					<td>${detail.Writer}</td>
				  </tr>
				  <tr>
					<th scope="row">21</th>
					<td>imdbID</td>
					<td>${detail.imdbID}</td>
				  </tr>
				  <tr>
					<th scope="row">22</th>
					<td>imdbRating</td>
					<td>${detail.imdbRating}</td>
				  </tr>
				  <tr>
					<th scope="row">23</th>
					<td>imdbVotes</td>
					<td>${detail.imdbVotes}</td>
					</tr>
					<tr>
					<th scope="row">24</th>
					<td>Poster</td>
					<td>${detail.Poster}</td>
					</tr>
					<tr>			
					<td>Ratings(1)</td>
					<td>${detail.Ratings[0].Source}</td>
					<td>${detail.Ratings[0].Value}</td>
					</tr>
					<tr>			
					<td>Ratings(2)</td>
					<td>${detail.Ratings[1].Source}</td>
					<td>${detail.Ratings[1].Value}</td>
					</tr>
					<tr>			
					<td>Ratings(3)</td>
					<td>${detail.Ratings[2].Source}</td>
					<td>${detail.Ratings[2].Value}</td>
				  </tr>`
					$("#showData").append(tempRow); // placing data in division with id - 'showData'
				  $("#photo").each(function(){
						$(this).append("<img src='https://ia.media-imdb.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg' width='40%' height='25%'/>");
					});
				}
				else {
					alert("Please Enter correct data")
				}
			}
			var info = detailofdata(Title, Year, imdbID, data);
		}
	});
}	
