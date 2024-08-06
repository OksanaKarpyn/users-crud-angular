// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class FiscalCodeValidatorService {

//   private static readonly cfRegex = /^[A-Z]{6}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1}$/;

//   constructor() { }

//   validate(cf: string): boolean {
//     cf = cf.toUpperCase();
//     if (!FiscalCodeValidatorService.cfRegex.test(cf)) {
//       return false;
//     }
//     return this.checkCheckCharacter(cf);
//   }

//   private checkCheckCharacter(cf: string): boolean {
//     const oddChars: { [key: string]: number } = {
//       '0': 1, '1': 0, '2': 5, '3': 7, '4': 9, '5': 13, '6': 15, '7': 17, '8': 19, '9': 21,
//       'A': 1, 'B': 0, 'C': 5, 'D': 7, 'E': 9, 'F': 13, 'G': 15, 'H': 17, 'I': 19, 'J': 21,
//       'K': 1, 'L': 0, 'M': 5, 'N': 7, 'O': 9, 'P': 13, 'Q': 15, 'R': 17, 'S': 19, 'T': 21,
//       'U': 1, 'V': 0, 'W': 5, 'X': 7, 'Y': 9, 'Z': 21
//     };
    
//     const evenChars: { [key: string]: number } = {
//       '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
//       'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9,
//       'K': 0, 'L': 1, 'M': 2, 'N': 3, 'O': 4, 'P': 5, 'Q': 6, 'R': 7, 'S': 8, 'T': 9,
//       'U': 0, 'V': 1, 'W': 2, 'X': 3, 'Y': 4, 'Z': 5
//     };

//     let sum = 0;
//     for (let i = 0; i < 15; i++) {
//       const c = cf[i];
//       sum += (i % 2 === 0) ? oddChars[c] : evenChars[c];
//     }

//     const checkChar = String.fromCharCode((sum % 26) + 'A'.charCodeAt(0));
//     return checkChar === cf[15];
//   }
// }


