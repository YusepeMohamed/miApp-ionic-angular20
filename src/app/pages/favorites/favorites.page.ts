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
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favorites: Post[] = [];
  currentUser: string | null = null;

  ngOnInit() {
    this.currentUser = localStorage.getItem('username') || 'Invitado';

    // Obtener los posts del usuario guardados en localStorage
    const savedData = localStorage.getItem(`posts_${this.currentUser}`);
    if (savedData) {
      const allPosts: Post[] = JSON.parse(savedData);
      // Filtrar solo los que están guardados
      this.favorites = allPosts.filter(p => p.saved);
    }
  }

  toggleLike(post: Post) {
    post.liked = !post.liked;
    post.liked ? post.likes++ : post.likes--;
    this.saveUserData();
  }

  toggleSave(post: Post) {
    post.saved = !post.saved;
    // Si se desmarca, se elimina del listado
    if (!post.saved) {
      this.favorites = this.favorites.filter(p => p.id !== post.id);
    }
    this.saveUserData();
  }

  private saveUserData() {
    // Guardar los cambios de los posts actualizados
    const savedData = localStorage.getItem(`posts_${this.currentUser}`);
    if (savedData) {
      let allPosts: Post[] = JSON.parse(savedData);
      allPosts = allPosts.map(p => {
        const updated = this.favorites.find(f => f.id === p.id);
        return updated ? updated : p;
      });
      localStorage.setItem(`posts_${this.currentUser}`, JSON.stringify(allPosts));
    }
  }
}
