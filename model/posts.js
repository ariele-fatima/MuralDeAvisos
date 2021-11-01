module.exports = {


    posts: [
        {id: "1", title: "Teste do mural", description: "Descrição teste"},
        {id: "2", title: "Teste do mural 2", description: "Descrição teste 2"}
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id: generateID(), title, description});
    }

    
}

function generateID(){
    return Math.random().toString(36).substr(2,9);
}