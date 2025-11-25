#202514882

import requests
import csv
import urllib3
from collections import defaultdict 

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

def rodar_desafio_p2():
    url_api = "https://apicadprev.trabalho.gov.br/DAIR_CARTEIRA"
    
    cnpj_marica = "29131075000193"

    filtros = {
        "nr_cnpj_entidade": cnpj_marica,
        "sg_uf": "RJ",
        "dt_ano": "2025"
    }

    CHAVE_MES = 'dt_mes_bimestre'
    CHAVE_VALOR = 'vl_total_atual'

    print("--- INICIANDO COLETA DE DADOS DE INVESTIMENTO ---")

    try:

        resposta = requests.get(url_api, params=filtros, verify=False, timeout=10)

        resposta.raise_for_status() 

        dados_json = resposta.json()

        lista_de_dados = dados_json.get('data', [])

        if not lista_de_dados:
            print("AVISO: A API retornou vazia. Provavelmente não tem dados de 2025 ainda.")
            return

        montante_mensal = defaultdict(float)
        
        print(f"Processando {len(lista_de_dados)} registros...")
        
        for item_de_investimento in lista_de_dados:
            
            mes_bruto = item_de_investimento.get(CHAVE_MES)
            
            valor_bruto = item_de_investimento.get(CHAVE_VALOR)
            
            if mes_bruto is not None and valor_bruto is not None:
                try:
                    valor_como_numero = float(valor_bruto)
                    montante_mensal[mes_bruto] += valor_como_numero
                except ValueError:
                    pass

        nome_do_arquivo = "desafio_p2_investimento.csv"
        
        with open(nome_do_arquivo, mode='w', newline='', encoding='utf-8') as arquivo_csv:
            
            escritor = csv.writer(arquivo_csv, delimiter=';')
            
            escritor.writerow(['Mes', 'Montante_Investido'])
            
            for mes in sorted(montante_mensal.keys()):
                valor_total = montante_mensal[mes]
                
                valor_formatado_csv = f"{valor_total:.2f}".replace('.', ',')
                
                mes_formatado_csv = f"{int(mes):02d}/2025"
                
                escritor.writerow([mes_formatado_csv, valor_formatado_csv])
                
        print(f"\n[SUCESSO] Arquivo de saída '{nome_do_arquivo}' foi gerado!")
        
    except requests.exceptions.RequestException as erro_conexao:
        print(f"ERRO DE CONEXÃO: Não consegui falar com a API. Detalhe: {erro_conexao}")
    except Exception as erro_geral:
        print(f"ERRO GERAL: Aconteceu algo inesperado. Detalhe: {erro_geral}")

if __name__ == "__main__":
    rodar_desafio_p2()