import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {UsuarioDto} from "./dto/UsuarioDto";
import {catchError, EMPTY, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  baseUrl = "http://localhost:8080/api/usuarios";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  read(): Observable<UsuarioDto[]> {
    return this.http.get<UsuarioDto[]>(this.baseUrl).pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<UsuarioDto> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<UsuarioDto>(url).pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
    );
  }

  update(usuarioDto: UsuarioDto): Observable<UsuarioDto> {
    const url = `${this.baseUrl}/${usuarioDto.id}`;
    return this.http.put<UsuarioDto>(url, usuarioDto).pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<UsuarioDto> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<UsuarioDto>(url).pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }



}
