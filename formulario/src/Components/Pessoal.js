import React from 'react';
import { useForm } from 'react-hook-form';
import './Pessoal.css';

const Pessoal = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Adicione lógica para enviar dados para o servidor ou realizar ações necessárias.
  };

  return (
    <div className="container mt-5">
      <h1>Informações Pessoais</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Seção de Informações Pessoais */}
        <div className="mb-3">
          <label htmlFor="nomeCompleto" className="form-label">
            Nome Completo:
          </label>
          <input
            type="text"
            className="form-control"
            id="nomeCompleto"
            {...register('nomeCompleto', { required: 'Este campo é obrigatório' })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dataNascimento" className="form-label">
            Data de Nascimento:
          </label>
          <input
            type="date"
            className="form-control"
            id="dataNascimento"
            {...register('dataNascimento', { required: 'Este campo é obrigatório' })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genero" className="form-label">
            Gênero:
          </label>
          <select
            className="form-select"
            id="genero"
            {...register('genero', { required: 'Este campo é obrigatório' })}
          >
            <option value="">Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="Matricula" className="form-label">
            Matricula:
          </label>
          <input
            type="text"
            className="form-control"
            id="Matricula"
            {...register('Matricula', { required: 'Este campo é obrigatório' })}
          />
        </div>

        {/* Botão de Envio */}
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>

      <div className="mt-5">
        <h2>Informações Familiares</h2>
        <div className="mb-3">
          <label htmlFor="nomeResponsavel" className="form-label">
            Nome do Responsável:
          </label>
          <input
            type="text"
            className="form-control"
            id="nomeResponsavel"
            {...register('nomeResponsavel')}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailResponsavel" className="form-label">
            Email do Responsável:
          </label>
          <input
            type="email"
            className="form-control"
            id="emailResponsavel"
            {...register('emailResponsavel')}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefoneResponsavel" className="form-label">
            Telefone do Responsável:
          </label>
          <input
            type="tel"
            className="form-control"
            id="telefoneResponsavel"
            {...register('telefoneResponsavel')}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="temIrmao" className="form-check-label">
            Tem Irmão?
          </label>
          <input
            type="checkbox"
            className="form-check-input"
            id="temIrmao"
            {...register('temIrmao')}
          />
        </div>
        {setValue('temIrmao', false)}
        <div className="mb-3">
          <label htmlFor="nomeIrmao" className="form-label">
            Nome do Irmão:
          </label>
          <input
            type="text"
            className="form-control"
            id="nomeIrmao"
            {...register('nomeIrmao')}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dataNascimentoIrmao" className="form-label">
            Data de Nascimento do Irmão:
          </label>
          <input
            type="date"
            className="form-control"
            id="dataNascimentoIrmao"
            {...register('dataNascimentoIrmao')}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="informacoesFamiliares" className="form-label">
            Informações Pertinentes sobre o Contexto Familiar:
          </label>
          <textarea
            className="form-control"
            id="informacoesFamiliares"
            rows="3"
            {...register('informacoesFamiliares')}
          ></textarea>
        </div>

        {/* Botão de Envio */}
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Pessoal;