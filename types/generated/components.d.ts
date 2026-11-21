import type { Schema, Struct } from '@strapi/strapi';

export interface SharedPilarProyeccion extends Struct.ComponentSchema {
  collectionName: 'components_shared_pilar_proyeccions';
  info: {
    displayName: 'Pilar Proyeccion';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    numero: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedValorInstitucional extends Struct.ComponentSchema {
  collectionName: 'components_shared_valor_institucionals';
  info: {
    displayName: 'Valor Institucional';
  };
  attributes: {
    nombre: Schema.Attribute.String;
    numero: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.pilar-proyeccion': SharedPilarProyeccion;
      'shared.valor-institucional': SharedValorInstitucional;
    }
  }
}
