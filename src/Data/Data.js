import blank from '../Images/Blank.png'
import Project1Cover from '../Images/project1-cover.jpg'
import Project2Cover from '../Images/project2-cover.jpg'
import Project3Cover from '../Images/project3-cover.jpg'
import Project3Det1 from '../Images/Project3Det1.jpg'
import Project3Det2 from '../Images/Project3Det2.jpg'
import Project3Det3 from '../Images/Project3Det3.jpg'

const projects = [
  {
    id: 1,
    image: Project1Cover,
    image1: blank,
    image2: blank,
    image3: blank,
    ProjectName: 'Bluewhale Pearl',
    ProjectSlogan: 'Where Luxury Shines Brighter',
    size: '200',
    ditailes: `Lorem ipsum Lorem ipsum Lorem ipsum ...`,
    price: '1,2000,000.00',
    Guests: 1,
    Pets: false,
    RoomsType: 'single',
    back: 'MAIN PAGE',
    P1: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P2: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P3: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P4: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P5: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P6: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P7: 'Lorem ipsum Lorem ipsum Lorem ipsum',
  },
  {
    id: 2,
    image: Project2Cover,
    image1: blank,
    image2: blank,
    image3: blank,
    ProjectName: 'Bluewhale Edge',
    ProjectSlogan: 'Where Design Meets Bold Living',
    size: '300',
    ditailes: `Lorem ipsum Lorem ipsum Lorem ipsum ...`,
    price: '2,500,000.00',
    Guests: 2,
    Pets: true,
    RoomsType: 'double',
    back: 'MAIN PAGE',
    P1: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P2: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P3: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P4: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P5: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P6: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P7: 'Lorem ipsum Lorem ipsum Lorem ipsum',
  },
  {
    id: 3,
    image: Project3Cover,
    image1: Project3Det1,
    image2: Project3Det2,
    image3: Project3Det3,
    ProjectName: 'Bluewhale Haven',
    ProjectSlogan: 'Your Quiet Escape in the Heart of the City',
    size: '',
    ditailes: `Lorem ipsum Lorem ipsum Lorem ipsum ...`,
    price: '1 Billion',
    Guests: 3,
    Pets: false,
    RoomsType: 'suite',
    back: 'MAIN PAGE',
    P1: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P2: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P3: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P4: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P5: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P6: 'Lorem ipsum Lorem ipsum Lorem ipsum',
    P7: 'Lorem ipsum Lorem ipsum Lorem ipsum',
  }
]

export default projects