import streamlit as st
import random

def gerar_numero_aleatorio(inicio, fim):
    return random.randint(inicio, fim)

def sortear_nomes(lista_nomes, quantidade):
    nomes_unicos = list(set(lista_nomes))
    if quantidade > len(nomes_unicos):
        return None
    return random.sample(nomes_unicos, quantidade)

def formar_grupos(lista_nomes, num_grupos):
    nomes_unicos = list(set(lista_nomes))
    random.shuffle(nomes_unicos)
    grupos = [[] for _ in range(num_grupos)]
    for i, nome in enumerate(nomes_unicos):
        grupos[i % num_grupos].append(nome)
    return grupos

def calcular_digito_cpf(cpf_parcial):
    soma = 0
    for i, v in enumerate(cpf_parcial):
        soma += int(v) * (len(cpf_parcial)+1 - i)
    resto = soma % 11
    return '0' if resto < 2 else str(11 - resto)

def gerar_cpf():
    cpf = [str(random.randint(0,9)) for _ in range(9)]
    d1 = calcular_digito_cpf(cpf)
    d2 = calcular_digito_cpf(cpf + [d1])
    cpf.append(d1)
    cpf.append(d2)
    return "{}{}{}.{}{}{}.{}{}{}-{}{}".format(*cpf)

# --- Streamlit App ---

st.set_page_config(page_title="Ferramentas para Professores", layout="centered")

st.title("🛠️ Ferramentas para Professores em Sala de Aula")

st.markdown("""
Bem-vindo(a)! Use estas ferramentas para facilitar suas atividades em sala de aula.
""")

# Ferramenta 1: Gerador de número aleatório
st.header("1. Gerador de Número Aleatório")
inicio = st.number_input("Número inicial", value=1, step=1)
fim = st.number_input("Número final", value=10, step=1)
if inicio > fim:
    st.error("O número inicial deve ser menor ou igual ao número final.")
else:
    if st.button("Gerar número aleatório"):
        num = gerar_numero_aleatorio(inicio, fim)
        st.success(f"Número gerado: {num}")

st.markdown("---")

# Ferramenta 2: Sorteio de nomes
st.header("2. Sorteio de Nomes")
nomes_texto = st.text_area("Insira os nomes (um por linha):")
lista_nomes = [nome.strip() for nome in nomes_texto.split("\n") if nome.strip()]
quantidade_sorteio = st.number_input("Quantos nomes sortear?", min_value=1, step=1, value=1)

if lista_nomes:
    if quantidade_sorteio > len(set(lista_nomes)):
        st.warning("A quantidade de nomes a sortear é maior do que os nomes únicos inseridos.")
    else:
        if st.button("Sortear nomes"):
            sorteados = sortear_nomes(lista_nomes, quantidade_sorteio)
            if sorteados:
                st.success("Nomes sorteados:")
                for nome in sorteados:
                    st.write(f"- {nome}")
else:
    st.info("Por favor, insira os nomes para sortear.")

st.markdown("---")

# Ferramenta 3: Formação de grupos
st.header("3. Formação de Grupos")
if lista_nomes:
    num_grupos = st.number_input("Número de grupos", min_value=1, step=1, value=2)
    if num_grupos > len(set(lista_nomes)):
        st.warning("O número de grupos não pode ser maior que a quantidade de nomes únicos.")
    else:
        if st.button("Formar grupos"):
            grupos = formar_grupos(lista_nomes, num_grupos)
            for i, grupo in enumerate(grupos, 1):
                st.write(f"**Grupo {i} ({len(grupo)} pessoas):**")
                for nome in grupo:
                    st.write(f"- {nome}")
else:
    st.info("Por favor, insira os nomes na seção anterior para formar grupos.")

st.markdown("---")

# Ferramenta 4: Gerador de CPFs válidos
st.header("4. Gerador de CPFs Válidos")
quantidade_cpfs = st.number_input("Quantos CPFs gerar?", min_value=1, max_value=100, value=1)
if st.button("Gerar CPFs"):
    cpfs_gerados = [gerar_cpf() for _ in range(quantidade_cpfs)]
    st.success("CPFs gerados:")
    for cpf in cpfs_gerados:
        st.write(cpf)
