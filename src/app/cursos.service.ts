import { Injectable } from '@angular/core';
import { CursosInterfaz } from './cursos-interfaz';
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  
  constructor() { } 
  submitApplication(firstName: string, lastName: string, email: string): void {
    window.alert(`Application submitted for ${firstName} ${lastName} with email ${email}`);
  }
  cursos: CursosInterfaz[] = [
    {
      id: 0,
      nombre: '00_Formación Interna SIDAF',
      descripcion: 'Introducción',
      imagen: 'https://media.licdn.com/dms/image/C560BAQFYMRvAvtnz2A/company-logo_200_200/0/1631381586551?e=2147483647&v=beta&t=YBQmNF_lEthG-YDnJA2fv8OW0ohf1ilBox2zlrn9VWY',
      status: 'completo',
      completado: 100,
    },
    {
      id: 1,
      nombre: '01_Introducción a SENDAUDIT en 60 minutos',
      descripcion: 'Introducción',
      imagen: 'https://www.systemzaragoza.com/wp-content/uploads/formacion.png',
      status: 'enprogreso',
      completado: 20,

    },
    {
      id: 2,
      nombre: '241_Formaciones HFG',
      descripcion: '24_Formaciones HFG',
      imagen: 'https://www.gipuzkoa.eus/documents/2937282/0/gfa_urdina.png/c8954b4e-955d-362c-beeb-fb155877bf6c?t=1715245783520',
      status: 'enprogreso',
      completado: 38,

    },
    {
      id: 3,
      nombre: '03_CursoAngular en 60 minutos',
      descripcion: 'Curso de Angular',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
      status: 'completo',
      completado: 100,
}
    ,
    {
      id: 4,
      nombre: '04_HFB SENDAUDIT formación',
      descripcion: 'Formación',
      imagen: 'https://pbs.twimg.com/profile_images/1519236507298680832/lPYM-SXN_400x400.jpg',
      status: 'todos',
      completado: 12,

    }
  ]
  getCourses() {
    return [...this.cursos]; // Devolver una copia de los cursos para evitar mutaciones.
  }
  
  getCoursesById(id: number) : CursosInterfaz | undefined {
    return this.cursos.find(curso => curso.id === id);

  }

  filterCourses(searchValue: string, status: string) {
    return this.cursos.filter(cursos => {
      const matchesStatus = status === 'todos' || cursos.status === status;
      const matchesSearch = cursos.nombre.toLowerCase().includes(searchValue.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }
}
