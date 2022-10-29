/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
/* eslint-disable no-empty */
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
import { JSONSchema4 } from './types';
import { ExtendedInterface } from './types';
import * as changeCase from 'change-case';

export const jsonSchemeKey = function (path: string): string {
  const deeps = path.split('/');
  const names = deeps.splice(deeps.length - 4, deeps.length).join('_');
  return changeCase.camelCase(names);
};

export const genJsonSchemeConstContent = function (
  path: string,
  serverUrl: string,
  info: ExtendedInterface,
  JSONSchema: JSONSchema4
): string {
  const name = jsonSchemeKey(path);
  const escapedTitle = String(info.title).replace(/\//g, '\\/');
  const description = `[${escapedTitle}↗](${serverUrl}/project/${info.project_id}/interface/api/${info._id})`;
  return `
    /**
     * ${description}
     */
    export const ${name} = ${JSON.stringify(JSONSchema)}
  `;
};

export const typeStr = function (data: unknown): string {
  const type = typeof data;
  if (type === 'object' && data instanceof Array) {
    return 'array';
  }
  if (type === 'object' && data === null) {
    return 'null';
  }
  if (type === 'number') {
    return 'integer';
  }

  return type;
};
export const isEmpty = function (data: unknown): boolean {
  return data === undefined || data === null || data === 0;
};

export const getDefaultValue = function (type: string): any {
  switch (type) {
    case 'string':
      return '';
    case 'object':
      return {};
    case 'array':
      return [];
    case 'integer':
      return -Infinity;
    default:
      return undefined;
  }
};

export const warning = function (content: string): void {
  console.warn(`->ResponseDataInspector：${content}`);
};

export const responseDataInspector = function (data: any, jsonScheme: JSONSchema4, key: any[] = ['data']): boolean {
  const { type, properties, items } = jsonScheme;

  if (type !== typeStr(data)) {
    warning(`${key.join('.')}与约定的类型不符，类型：${type}，返回值：${data}`);
    return false;
  }
  if (type === 'object') {
    if (!properties || !Object.keys(properties).length) {
      return true;
    }
    return Object.keys(properties).every(k => responseDataInspector(data[k], properties[k], [...key, k]));
  }
  if (type === 'array') {
    if (items === undefined) {
      // undefined则为接受任意类型
      return true;
    }
    if (items instanceof Array) {
      return (data as Array<any>).some(v => items.every(item => responseDataInspector(v, item)));
    }
    if (items instanceof Object) {
      return (data as Array<any>).every((v, index) => responseDataInspector(v, items, [...key, index]));
    }
  }

  return true;
};

export const runner = function (path: string, data: any, jsonSchema: Record<string, JSONSchema4>): void {
  const key = jsonSchemeKey(path);
  responseDataInspector(data, jsonSchema[key]);
};

export const jsonSchemeFileHeader = function (): string {
  return `
  import * as changeCase from 'change-case';
  import { JSONSchema4 } from 'api-typescript';

  /**
   * 获取scheme的key
   */
  export const jsonSchemeKey = function (path: string): string {
    const deeps = path.split('/');
    const names = deeps.splice(deeps.length - 4, deeps.length).join('_');
    return changeCase.camelCase(names);
  };

  export const typeStr = function (data: unknown): string {
    const type = typeof data;
    if (type === 'object' && data instanceof Array) {
      return 'array';
    }
    if (type === 'object' && data === null) {
      return 'null';
    }
    if (type === 'number') {
      return 'integer';
    }

    return type;
  };

  /**
   * 检查器
   */
  export const responseDataInspector = function (data: any, jsonScheme: JSONSchema4, key: any[] = ['data']): boolean {
    const { type, properties, items } = jsonScheme;

    if (type !== typeStr(data)) {
      console.warn(\`->ResponseDataInspector：\${key.join('.')}与约定的类型不符，类型：\${type}，返回值：\${data}\`);
      return false;
    }
    if (type === 'object') {
      if (!properties || !Object.keys(properties).length) {
        return true;
      }
      return Object.keys(properties).every(k => responseDataInspector(data[k], properties[k], [...key, k]));
    }
    if (type === 'array') {
      if (items === undefined) {
        // undefined则为接受任意类型
        return true;
      }
      if (items instanceof Array) {
        return (data as Array<any>).some(v => items.every(item => responseDataInspector(v, item)));
      }
      if (items instanceof Object) {
        return (data as Array<any>).every((v, index) => responseDataInspector(v, items, [...key, index]));
      }
    }

    return true;
  };

  export const runner = function (path: string, data: any, jsonSchema: Record<string, any>): void {
    const key = jsonSchemeKey(path);
    responseDataInspector(data, jsonSchema[key]);
  };
  `;
};
