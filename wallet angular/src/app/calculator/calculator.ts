import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';

// Interfaces para tipado simplificadas
interface Transaction {
  amount: number;
  description: string;
}

@Component({
  selector: 'app-calculator',
  imports: [Navbar, FormsModule, CommonModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  
  // Estado de la sección activa
  activeSection: string = 'balance';
  
  // Arrays para almacenar transacciones
  incomes: Transaction[] = [
    { amount: 0, description: 'Salario mensual' }
  ];
  
  expenses: Transaction[] = [
    { amount: 0, description: 'Gastos varios' }
  ];
  
  // Objetos para nuevas transacciones
  newIncome: Transaction = {
    amount: 0,
    description: ''
  };
  
  newExpense: Transaction = {
    amount: 0,
    description: ''
  };
  
  // Getters para calcular totales
  get totalIncome(): number {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  }
  
  get totalExpenses(): number {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }
  
  get totalBalance(): number {
    return this.totalIncome - this.totalExpenses;
  }
  
  // Método para cambiar sección activa
  setActiveSection(section: string): void {
    this.activeSection = section;
  }
  
  // Método para agregar ingreso
  addIncome(): void {
    if (this.newIncome.amount && this.newIncome.description) {
      this.incomes.push({
        amount: this.newIncome.amount,
        description: this.newIncome.description
      });
      
      // Limpiar formulario
      this.newIncome = {
        amount: 0,
        description: ''
      };
      
      // Mostrar mensaje de éxito (opcional)
      console.log('Ingreso agregado exitosamente');
      
      // Cambiar a la sección balance para ver el resultado
      this.setActiveSection('balance');
    }
  }
  
  // Método para agregar gasto
  addExpense(): void {
    if (this.newExpense.amount && this.newExpense.description) {
      this.expenses.push({
        amount: this.newExpense.amount,
        description: this.newExpense.description
      });
      
      // Limpiar formulario
      this.newExpense = {
        amount: 0,
        description: ''
      };
      
      // Mostrar mensaje de éxito (opcional)
      console.log('Gasto agregado exitosamente');
      
      // Cambiar a la sección balance para ver el resultado
      this.setActiveSection('balance');
    }
  }
}