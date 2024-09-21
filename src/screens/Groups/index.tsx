import { Button } from "@components/Button";
import { Container } from "./styles";
import { FlatList } from "react-native";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { useState } from "react";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flexGrow: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Cadastre a primeira turma!" />
        )}
      />

      <Button title="Cadastrar turma" />
    </Container>
  );
}
