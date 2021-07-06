import RestoSource from '../../data/resto-source';

const HomePage = {
  async render() {
    return `
     <div id="resto" class="posts">
      helloooo
    </div>
   `;
  },

  async afterRender() {
    const rests = await RestoSource.homeResto();
    console.log(rests);

    // TODO: tampilkan movies di dalam DOM
  },
};

export default HomePage;