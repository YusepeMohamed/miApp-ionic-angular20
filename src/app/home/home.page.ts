import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

interface Post {
  id: number;
  user: string;
  avatar: string;
  content: string;
  image?: string;
  liked: boolean;
  saved: boolean;
  likes: number;
  comments: number;
  time: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{


  posts: Post[] = [];
  currentUser: string | null = null;

  ngOnInit(){
    this.currentUser = localStorage.getItem('username') || 'Invitado';

    this.posts = [
      {
      id: 1,
      user: 'Lucía Martínez',
      avatar: 'https://i.pravatar.cc/150?img=47',
      content: 'Un cappuccino con canela es la mejor manera de empezar el día',
      image: 'assets/posts/cafeteria1.jpg',
      liked: false,
      saved: false,
      likes: 24,
      comments: 5,
      time: 'Hace 2 h'
    },
    {
      id: 2,
      user: 'Carlos Gómez',
      avatar: 'https://i.pravatar.cc/150?img=12',
      content: 'Hoy probé un espresso doble con un toque de chocolate amargo. Increíble sabor.',
      image: 'assets/posts/cafeteria2.jpg',
      liked: false,
      saved: false,
      likes: 15,
      comments: 2,
      time: 'Hace 3 h'
    },
    {
      id: 3,
      user: 'María López',
      avatar: 'https://i.pravatar.cc/150?img=32',
      content: 'Amo este rincón de la cafetería, siempre tan tranquilo y acogedor.',
      image: 'assets/posts/cafeteria3.jpg',
      liked: false,
      saved: false,
      likes: 32,
      comments: 8,
      time: 'Hace 5 h'
    },
    {
      id: 4,
      user: 'Andrés Ruiz',
      avatar: 'https://i.pravatar.cc/150?img=14',
      content: 'Latte art con forma de corazón ',
      image: 'assets/posts/cafeteria4.jpg',
      liked: false,
      saved: false,
      likes: 40,
      comments: 10,
      time: 'Hace 7 h'
    },
    {
      id: 5,
      user: 'Camila Torres',
      avatar: 'https://i.pravatar.cc/150?img=36',
      content: 'Nada como leer un buen libro acompañada de un café americano ',
      liked: false,
      saved: false,
      likes: 12,
      comments: 3,
      time: 'Hace 9 h'
    },
    {
      id: 6,
      user: 'Juan Pérez',
      avatar: 'https://i.pravatar.cc/150?img=18',
      content: '¿Alguien más ama el olor del café recién molido? ',
      liked: false,
      saved: false,
      likes: 8,
      comments: 1,
      time: 'Hace 11 h'
    },
    {
      id: 7,
      user: 'Sofía Ríos',
      avatar: 'https://i.pravatar.cc/150?img=28',
      content: 'Hoy tuve una charla inspiradora con un barista, aprendí mucho sobre los granos colombianos.',
      liked: false,
      saved: false,
      likes: 18,
      comments: 4,
      time: 'Hace 13 h'
    },
    {
      id: 8,
      user: 'Pedro Álvarez',
      avatar: 'https://i.pravatar.cc/150?img=52',
      content: 'Un simple café puede mejorar el día de cualquiera',
      liked: false,
      saved: false,
      likes: 10,
      comments: 2,
      time: 'Hace 15 h'
    },
    ];

    const savedData = localStorage.getItem(`posts_${this.currentUser}`);
    if (savedData) {
      const parsedPosts = JSON.parse(savedData);
      this.posts.forEach(p => {
        const savedPost = parsedPosts.find((sp: Post) => sp.id === p.id);
        if (savedPost) {
          p.liked = savedPost.liked;
          p.saved = savedPost.saved;
          p.likes = savedPost.likes;
        }
      });
    }
  }

  toggleLike(post: Post) {
    post.liked = !post.liked;
    post.liked ? post.likes++ : post.likes--;
    this.saveUserData();
  }

  toggleSave(post: Post) {
    post.saved = !post.saved;
    this.saveUserData();
  }

    private saveUserData() {
    localStorage.setItem(`posts_${this.currentUser}`, JSON.stringify(this.posts));
  }
}
