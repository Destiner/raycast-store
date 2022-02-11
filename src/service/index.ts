import extension from './extension.json';

interface Extension {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: {
    title: string;
    id: string;
  };
  commands: {
    icon?: string;
    title: string;
    description: string;
  }[];
  preferences: {
    title: string;
    description: string;
  }[];
  author: {
    name: string;
    avatar: string;
  };
  contributors: {
    name: string;
    avatar: string;
  }[];
  installs: number;
  source: string;
  media: string[];
}

class Service {
  static async listExtensions() {
    return [];
  }

  static async getExtension(author: string, id: string): Promise<Extension> {
    return extension;
  }
}

export default Service;

export type { Extension };
