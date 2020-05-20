
export default class ReactFirebaseFileUpload extends React.Component {
  state = {
    posts: [],
  }
  componentDidMount(){
    this.getProducts();
  }
  getProducts = () =>{
    axios.post('/data')
      .then((response) =>{
        const posts = response.data;
        this.setState({posts: posts.data})
      })
      .catch(() =>{
        console.log('Something wrong');
      })
  }

  disPlay =(posts) =>{
    if(!posts.length) return null;
    return posts.map((post, index) => (
      <div class="data" key={index}>
        <p>{post.stt_user}</p>
        <p>{post.id_user}</p>
        <p>{post.user_name}</p>
        <p>{post.password}</p>
        <p>{post.gmail_user}</p>
        <p>{post.date_user}</p>
      </div>
    ));
  }
  render() {
    return (
      <div class="sjkdias">
        {this.disPlay(this.state.posts)}
      </div>
    );
  }
}