

const Header = ({ people }) => {
    return(
       <>
            {people.map((menu)=>{
                return (
                   
                    <article key={menu.id} className='person'>
                    <img  key={menu.id} src={menu.image} alt={menu.name} />
                    <div>
                      <h4>{menu.name}</h4>
                      <p>{menu.age} years</p>
                    </div>
                  </article>
        
                );

            })};

        </>
    );
};

export default Header;
