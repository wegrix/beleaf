import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private titleService: Title) { }

  generateTags(tags) {
    // Default Values
    tags = {
      title: 'Beleafdesign - Diseño y Talento Local',
      description: 'Beleafdesign is a startup company based in Colombia ' +
        'that wants to inspire designers to create more work and be able to profit from it.',
      image: 'https://beleaf.herokuapp.com/assets/images/home/banner/design.png',
      slug: '',
      ...tags
    }

    // Set a title
    // this.titleService.setTitle(tags.title);
    // Set meta tags
    /*     this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://beleaf.herokuapp.com' });
        this.meta.updateTag({ name: 'twitter:title', content: tags.title });
        this.meta.updateTag({ name: 'twitter:description', content: tags.description });
        this.meta.updateTag({ name: 'twitter:image', content: tags.image });
        this.meta.updateTag({ name: 'description', content: tags.description })
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Beleafdesign' });
        this.meta.updateTag({ property: 'og:title', content: tags.title });
        this.meta.updateTag({ property: 'og:description', content: tags.description });
        this.meta.updateTag({ property: 'og:image', content: tags.image });
        this.meta.updateTag({ property: 'og:url', content: `https://beleaf.herokuapp.com/${tags.slug}` }); */
  }

  updateTitle(title: string) {
    this.titleService.setTitle(title);
  }


  updateOgUrl(url: string) {
    this.meta.updateTag({ name: 'og:url', content: url })
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
    this.meta.updateTag({ name: 'twitter:description', content: desc })
  }

  updateImage(desc: string) {
    this.meta.updateTag({ name: 'og:image', content: desc })
    this.meta.updateTag({ name: 'twitter:image', content: desc })
  }
}
