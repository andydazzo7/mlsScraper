let api_conn = {
    getArts(team){
        return(fetch(`http://localhost:4000/teams/${team}`).then(response=>response.json()).then(jsonResponse=>{
            console.log(jsonResponse);
            return jsonResponse.map(data =>({
                team: data.team,
                title: data.title,
                link: data.link,
                release: data.release_date,
                image: data.image


            }));
        })
        );
    },
    getTops(){
        return(fetch(`http://localhost:4000/tops`).then(response=>response.json()).then(jsonResponse=>{
            console.log(jsonResponse);
            return jsonResponse.map(data =>({
                team: data.team,
                title: data.title,
                link: data.link,
                release: data.release_date,
                image: data.image

            }));
        })
        );
    },
}
export default api_conn;